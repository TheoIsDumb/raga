export const baseURL = "https://www.jiosaavn.com/api.php?_format=json&_marker=0&api_version=4&ctx=web6dot0&"
export const proxyURL = "proxy.raga.vkdbois.xyz"

export const sub = Object.freeze({
  search: {
    all: '&__call=autocomplete.get',
    songs: '&__call=search.getResults&q=',
    albums: '&__call=search.getAlbumResults&q=',
    artists: '&__call=search.getArtistResults&q=',
    playlists: '&__call=search.getPlaylistResults&q=',
  },
  modules: "__call=content.getBrowseModules",
  songDetails: "__call=song.getDetails&pids=",
  albumDetails: "__call=content.getAlbumDetails&albumid=",
  artistDetails: "__call=artist.getArtistPageDetails&artistId=",
  playlistDetails: "__call=playlist.getDetails&listid=",
  lyrics: "__call=lyrics.getLyrics&lyrics_id=",
  reco: "__call=reco.getreco&language=english&pid=",
  newReleases: "__call=content.getAlbums&p=1&n=50",
  topCharts: "__call=content.getCharts",
  topPlaylists: "__call=content.getFeaturedPlaylists&p=1&n=50",
  index: "p="
});