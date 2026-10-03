const fs = require('fs');

const PLAYLISTS = [
  {
    id: 'playlist1',
    channelKey: 'playlist-1',
    url: 'https://www.youtube.com/playlist?list=PLvGPylmSp7lrvDQtaiBXdvndDfrxn60vE'
  },
  {
    id: 'playlist2',
    channelKey: 'ibrat-nemis-a1',
    url: 'https://www.youtube.com/playlist?list=PLkREkayoYCyIYpyhgshcTvsBTsKU8oJUi'
  },
  {
    id: 'playlist3',
    channelKey: 'nicos-weg-a1',
    url: 'https://www.youtube.com/playlist?list=PLs7zUO7VPyJ6eoN6SmB1UcwvPUagK87ix'
  }
];

async function fetchPlaylist(pl) {
  console.log(`\n========================================`);
  console.log(`Fetching ${pl.id} (${pl.url})...`);
  const res = await fetch(pl.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'uz-UZ,uz;q=0.9,ru;q=0.8,en;q=0.7'
    }
  });
  const html = await res.text();
  const jsonMatch = html.match(/var ytInitialData = ({.*?});<\/script>/s);
  if (!jsonMatch) {
    console.error('No ytInitialData for', pl.id);
    return null;
  }

  const data = JSON.parse(jsonMatch[1]);
  const secList = data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.[0]?.tabRenderer?.content?.sectionListRenderer;
  const itemSec = secList?.contents?.[0]?.itemSectionRenderer;
  const contents = itemSec?.contents || [];

  // Playlist header metadata
  const header = data?.header?.playlistHeaderRenderer;
  const pageTitle = data?.metadata?.playlistMetadataRenderer?.title || header?.title?.simpleText || header?.title?.runs?.[0]?.text || '';
  const channelName = header?.ownerText?.runs?.[0]?.text || data?.metadata?.playlistMetadataRenderer?.author || '';
  const description = header?.descriptionText?.simpleText || header?.descriptionText?.runs?.[0]?.text || '';

  const videos = [];
  for (let i = 0; i < contents.length; i++) {
    const item = contents[i]?.lockupViewModel;
    if (!item || !item.contentId) continue;

    const videoId = item.contentId;
    const title = item.metadata?.lockupMetadataViewModel?.title?.content || '';
    const duration = item.contentImage?.thumbnailViewModel?.overlays?.[0]?.thumbnailBottomOverlayViewModel?.badges?.[0]?.thumbnailBadgeViewModel?.text || '';

    videos.push({
      episodeNumber: videos.length + 1,
      videoId,
      title,
      duration
    });
  }

  console.log(`Title: "${pageTitle}"`);
  console.log(`Channel: "${channelName}"`);
  console.log(`Total videos found: ${videos.length}`);
  if (videos.length > 0) {
    console.log('First 2 videos:');
    console.log(videos.slice(0, 2));
    console.log('Last video:');
    console.log(videos.slice(-1));
  }

  return {
    playlistId: pl.id,
    pageTitle,
    channelName,
    description,
    videos
  };
}

async function main() {
  const allResults = {};
  for (const pl of PLAYLISTS) {
    allResults[pl.id] = await fetchPlaylist(pl);
  }

  fs.writeFileSync('scripts/parsed_playlists.json', JSON.stringify(allResults, null, 2), 'utf-8');
  console.log('\nAll 3 playlists parsed and saved to scripts/parsed_playlists.json!');
}

main();
