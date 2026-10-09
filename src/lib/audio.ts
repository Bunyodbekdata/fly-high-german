// Native German Audio & High-Fidelity Speech Service
// Uses authentic Hochdeutsch pronunciation (Google German Neural Audio Stream)
// with intelligent sentence chunking and offline Web Speech fallback.

export interface AudioPlayOptions {
  rate?: number; // 0.75 (slow), 0.88 (ideal for learners), 1.0 (normal)
  engine?: 'auto' | 'google' | 'webspeech';
}

/**
 * Why playback produced no sound. Surfaced to the UI so a silent failure can
 * never look like a successful click again.
 */
export type AudioFailureReason = 'voice_missing' | 'unsupported' | 'playback_failed';

/**
 * Outcome of a speak() call. `reason` is only set when playback genuinely
 * could not happen, so a deliberate stop is never reported as an error.
 */
export interface AudioPlayResult {
  ok: boolean;
  reason?: AudioFailureReason;
}

class AudioService {
  private currentAudio: HTMLAudioElement | null = null;
  private isPlayingAudio = false;
  private queueAbortController: AbortController | null = null;
  private germanVoice: SpeechSynthesisVoice | null = null;
  private voicesLoaded = false;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private recordedAudioUrl: string | null = null;
  private listeners: Set<(speaking: boolean) => void> = new Set();
  private speedListeners: Set<(speed: number) => void> = new Set();
  private lastFailureReason: AudioFailureReason | null = null;
  private preferredRate = 0.88;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedSpeed = localStorage.getItem('for_great_nation_audio_speed');
      if (savedSpeed) {
        const parsed = parseFloat(savedSpeed);
        if (!isNaN(parsed) && parsed >= 0.6 && parsed <= 1.2) {
          this.preferredRate = parsed;
        }
      }
      if ('speechSynthesis' in window) {
        this.initVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => this.initVoices();
        }
      }
    }
  }

  public getSpeed(): number {
    return this.preferredRate;
  }

  public setSpeed(speed: number) {
    this.preferredRate = speed;
    if (typeof window !== 'undefined') {
      localStorage.setItem('for_great_nation_audio_speed', speed.toString());
    }
    this.speedListeners.forEach((fn) => {
      try {
        fn(speed);
      } catch (err) {
        console.error('Speed listener error', err);
      }
    });
  }

  public onSpeedChange(listener: (speed: number) => void): () => void {
    this.speedListeners.add(listener);
    return () => this.speedListeners.delete(listener);
  }

  // Subscribe to playback status changes
  public onStateChange(listener: (speaking: boolean) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyState(speaking: boolean) {
    this.isPlayingAudio = speaking;
    this.listeners.forEach((fn) => {
      try {
        fn(speaking);
      } catch (err) {
        console.error('Audio state listener error', err);
      }
    });
  }

  /**
   * Records why the last attempt produced no sound. The reason travels back
   * through speak(), so only the button the learner pressed reacts to it.
   */
  private markFailure(reason: AudioFailureReason) {
    this.lastFailureReason = reason;
  }

  /**
   * Voices are populated asynchronously in most browsers, so a first click can
   * arrive before the German voice exists. Wait briefly for the list instead of
   * declaring the feature broken on the spot.
   */
  private ensureVoices(timeoutMs = 700): Promise<void> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return Promise.resolve();
    }
    if (this.germanVoice || window.speechSynthesis.getVoices().length > 0) {
      return Promise.resolve();
    }

    const synth = window.speechSynthesis;
    return new Promise((resolve) => {
      let timer: ReturnType<typeof setTimeout>;
      const finish = () => {
        synth.removeEventListener('voiceschanged', onChange);
        clearTimeout(timer);
        resolve();
      };
      const onChange = () => {
        this.initVoices();
        finish();
      };
      timer = setTimeout(finish, timeoutMs);
      synth.addEventListener('voiceschanged', onChange);
    });
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    this.voicesLoaded = true;

    // Filter strictly for authentic German voices (de-DE, de-AT, de-CH)
    const germanVoices = voices.filter((v) => {
      const lang = (v.lang || '').toLowerCase();
      const name = (v.name || '').toLowerCase();
      return (
        lang.startsWith('de') ||
        name.includes('german') ||
        name.includes('deutsch')
      );
    });

    if (germanVoices.length > 0) {
      // Prioritize modern natural/neural voices over legacy robotic voices
      this.germanVoice =
        germanVoices.find(
          (v) =>
            v.name.includes('Natural') ||
            v.name.includes('Online') ||
            v.name.includes('Google Deutsch')
        ) ||
        germanVoices.find((v) => v.lang === 'de-DE') ||
        germanVoices[0];
    } else {
      this.germanVoice = null;
    }
  }

  /**
   * Cleans text to ensure natural, distraction-free German pronunciation.
   * Strips role prefixes like "Florian: ", transliterations in "[...]", etc.
   */
  private cleanGermanText(rawText: string): string {
    if (!rawText) return '';
    return rawText
      // Remove speaker name prefix: e.g. "Anna: Hallo" -> "Hallo"
      .replace(/^[A-Za-zÄÖÜäöüß\s]+:\s*/, '')
      // Remove bracketed pronunciation guides: e.g. "[Vel-çe...]"
      .replace(/\[.*?\]/g, '')
      // Remove markdown bold/italics
      .replace(/[*_~`]/g, '')
      // Remove special quotes
      .replace(/[„“”«»"]/g, '')
      // Replace fill-in blank indicators with natural pauses
      .replace(/_{2,}/g, ' ... ')
      .replace(/\[blank\]/gi, ' ... ')
      // Clean duplicate whitespace
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Splits longer German texts (reading passages, full dialogues) into
   * natural sentence chunks that fit within audio stream limits.
   */
  private splitIntoSentenceChunks(text: string, maxChunkLength = 150): string[] {
    // Split text by sentence ending punctuation or newlines
    const rawSentences = text.match(/[^.!?\n]+[.!?\n]*/g) || [text];
    const chunks: string[] = [];
    let currentChunk = '';

    for (const raw of rawSentences) {
      const sentence = raw.trim();
      if (!sentence) continue;

      if ((currentChunk + ' ' + sentence).trim().length <= maxChunkLength) {
        currentChunk = currentChunk ? `${currentChunk} ${sentence}` : sentence;
      } else {
        if (currentChunk) {
          chunks.push(currentChunk);
        }
        // If single sentence is itself huge, break by commas or clauses
        if (sentence.length > maxChunkLength) {
          const subParts = sentence.split(/([,;:]\s+)/);
          let subChunk = '';
          for (const part of subParts) {
            if ((subChunk + part).length <= maxChunkLength) {
              subChunk += part;
            } else {
              if (subChunk) chunks.push(subChunk.trim());
              subChunk = part;
            }
          }
          if (subChunk) chunks.push(subChunk.trim());
          currentChunk = '';
        } else {
          currentChunk = sentence;
        }
      }
    }

    if (currentChunk) {
      chunks.push(currentChunk);
    }

    return chunks.length > 0 ? chunks : [text];
  }

  /**
   * Main method to play authentic German speech.
   * Defaults to high-quality German studio audio, falling back to WebSpeech
   * only if an authentic German system voice exists.
   */
  /**
   * Main method to play authentic German speech.
   * Uses high-fidelity Web Speech API with sentence chunking and de-DE language tags,
   * falling back to online audio stream.
   */
  public async speak(text: string, rate?: number): Promise<AudioPlayResult> {
    this.stop(); // Stop any currently playing audio

    const effectiveRate = rate !== undefined ? rate : this.getSpeed();
    const cleanedText = this.cleanGermanText(text);
    this.lastFailureReason = null;
    if (!cleanedText) return { ok: false };

    this.notifyState(true);
    const abortController = new AbortController();
    this.queueAbortController = abortController;

    let spoke = false;
    try {
      // 1. Primary Engine: Web Speech API (zero latency, offline capable, authentic German pronunciation)
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        spoke = await this.playViaWebSpeech(cleanedText, effectiveRate);
      }

      // 2. Secondary Engine: If Web Speech produced no output, try online audio stream
      if (!spoke && !abortController.signal.aborted) {
        try {
          await this.playViaGoogleTTS(cleanedText, effectiveRate, abortController.signal);
          spoke = !abortController.signal.aborted;
        } catch (e) {
          console.warn('Google TTS stream also unavailable:', e);
        }
      }
    } catch (err) {
      console.warn('Audio playback error:', err);
    } finally {
      if (this.queueAbortController === abortController) {
        this.queueAbortController = null;
        this.notifyState(false);
      }
    }

    if (spoke) return { ok: true };
    return this.lastFailureReason
      ? { ok: false, reason: this.lastFailureReason }
      : { ok: false };
  }

  /**
   * Plays text using Google Translate's native German audio stream as a fallback.
   * Handles multi-sentence text by queueing audio chunks seamlessly.
   */
  private playViaGoogleTTS(
    text: string,
    rate: number,
    signal: AbortSignal
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const chunks = this.splitIntoSentenceChunks(text, 140);
      let currentIndex = 0;

      const playNextChunk = () => {
        if (signal.aborted) {
          resolve();
          return;
        }

        if (currentIndex >= chunks.length) {
          this.currentAudio = null;
          resolve();
        } else {
          const chunk = chunks[currentIndex];
          currentIndex++;

          const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=gtx&q=${encodeURIComponent(
            chunk
          )}`;

          const audio = new Audio(audioUrl);
          this.currentAudio = audio;
          audio.playbackRate = Math.max(0.7, Math.min(rate, 1.2));

          const cleanup = () => {
            audio.onended = null;
            audio.onerror = null;
          };

          audio.onended = () => {
            cleanup();
            setTimeout(() => {
              if (!signal.aborted) {
                playNextChunk();
              } else {
                resolve();
              }
            }, 100);
          };

          audio.onerror = () => {
            cleanup();
            this.currentAudio = null;
            reject(new Error('Audio stream error'));
          };

          audio.play().catch((playErr) => {
            cleanup();
            this.currentAudio = null;
            reject(playErr);
          });
        }
      };

      playNextChunk();
    });
  }

  /**
   * Primary engine: Web Speech API.
   * Speaks German with native German voices or built-in de-DE speech synthesis.
   * Intelligent sentence chunking ensures Chrome/Edge never freeze on long passages.
   */
  private async playViaWebSpeech(text: string, rate: number): Promise<boolean> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.markFailure('unsupported');
      return false;
    }

    await this.ensureVoices(400);

    if (!this.voicesLoaded) {
      this.initVoices();
    }

    const synth = window.speechSynthesis;
    const chunks = this.splitIntoSentenceChunks(text, 130);

    return new Promise<boolean>((resolve) => {
      try {
        synth.cancel();
        synth.resume();
      } catch {
        // ignore
      }

      let currentIndex = 0;
      let hasSpokenAny = false;
      let heartbeatTimer: any = null;

      // Chrome speech synthesis anti-pause heartbeat
      heartbeatTimer = setInterval(() => {
        if (synth.speaking && !synth.paused) {
          synth.resume();
        }
      }, 2000);

      const cleanup = () => {
        if (heartbeatTimer) {
          clearInterval(heartbeatTimer);
          heartbeatTimer = null;
        }
      };

      const speakNextChunk = () => {
        if (this.queueAbortController?.signal.aborted) {
          cleanup();
          resolve(hasSpokenAny);
          return;
        }

        if (currentIndex >= chunks.length) {
          cleanup();
          resolve(hasSpokenAny);
          return;
        }

        const chunkText = chunks[currentIndex];
        currentIndex++;

        const utterance = new SpeechSynthesisUtterance(chunkText);
        if (this.germanVoice) {
          utterance.voice = this.germanVoice;
        }
        // Always enforce German language code for pronunciation
        utterance.lang = this.germanVoice?.lang || 'de-DE';
        utterance.rate = Math.max(0.7, Math.min(rate, 1.15));
        utterance.pitch = 1.0;

        utterance.onstart = () => {
          hasSpokenAny = true;
        };

        utterance.onend = () => {
          setTimeout(speakNextChunk, 80);
        };

        utterance.onerror = (e) => {
          console.warn('Speech chunk notification:', e);
          if (currentIndex < chunks.length && hasSpokenAny) {
            setTimeout(speakNextChunk, 50);
          } else {
            cleanup();
            resolve(hasSpokenAny);
          }
        };

        try {
          synth.speak(utterance);
        } catch (speakErr) {
          console.warn('SpeechSynthesis speak failed:', speakErr);
          cleanup();
          resolve(hasSpokenAny);
        }
      };

      speakNextChunk();
    });
  }

  /**
   * Immediately stops any currently playing audio (HTML5 audio and speech synthesis)
   */
  public stop() {
    if (this.queueAbortController) {
      this.queueAbortController.abort();
      this.queueAbortController = null;
    }

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (err) {
        // ignore
      }
      this.currentAudio = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {
        // ignore
      }
    }

    this.notifyState(false);
  }

  public isSpeaking(): boolean {
    if (this.isPlayingAudio) return true;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }

  // Voice recording for Shadowing practice
  public async startRecording(): Promise<boolean> {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      return false;
    }

    try {
      this.audioChunks = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      return true;
    } catch (err) {
      console.warn('Microphone permission denied or unavailable', err);
      return false;
    }
  }

  public stopRecording(): Promise<string | null> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        if (this.recordedAudioUrl) {
          URL.revokeObjectURL(this.recordedAudioUrl);
        }
        this.recordedAudioUrl = URL.createObjectURL(audioBlob);

        // Stop audio tracks
        this.mediaRecorder?.stream.getTracks().forEach((track) => track.stop());
        resolve(this.recordedAudioUrl);
      };

      this.mediaRecorder.stop();
    });
  }

  public playAudioUrl(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.stop();
      const audio = new Audio(url);
      this.currentAudio = audio;
      this.notifyState(true);

      audio.onended = () => {
        this.currentAudio = null;
        this.notifyState(false);
        resolve();
      };

      audio.onerror = (e) => {
        this.currentAudio = null;
        this.notifyState(false);
        reject(e);
      };

      audio.play().catch((err) => {
        this.currentAudio = null;
        this.notifyState(false);
        reject(err);
      });
    });
  }
}

export const audioService = new AudioService();
