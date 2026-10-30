const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4173;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const ttsCache = new Map();

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];

  // High-fidelity German TTS streaming proxy
  if (cleanUrl === '/api/tts') {
    try {
      const urlObj = new URL(req.url, `http://localhost:${PORT}`);
      const text = (urlObj.searchParams.get('q') || '').trim();
      if (!text) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Missing text parameter');
      }
      if (ttsCache.has(text)) {
        res.writeHead(200, {
          'Content-Type': 'audio/mpeg',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=86400'
        });
        return res.end(ttsCache.get(text));
      }
      const targetUrl = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=' + encodeURIComponent(text);
      fetch(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
        .then(async resp => {
          if (!resp.ok) throw new Error('Status ' + resp.status);
          const buf = Buffer.from(await resp.arrayBuffer());
          ttsCache.set(text, buf);
          res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'public, max-age=86400'
          });
          res.end(buf);
        })
        .catch(err => {
          res.writeHead(502, { 'Content-Type': 'text/plain' });
          res.end('TTS Error: ' + err.message);
        });
      return;
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end(e.message);
    }
  }

  let filePath = path.join(__dirname, cleanUrl === '/' ? 'index.html' : cleanUrl);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
