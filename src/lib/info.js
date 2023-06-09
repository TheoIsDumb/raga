export const baseURL = "https://www.jiosaavn.com/api.php?_format=json&_marker=0&api_version=4&ctx=web6dot0&n=50&__call="

export const sub = Object.freeze({ 
  search: {
      all: 'autocomplete.get',
      songs: 'search.getResults&q=',
      albums: 'search.getAlbumResults&q=',
      artists: 'search.getArtistResults&q=',
      playlists: 'search.getPlaylistResults',
    },
    songDetails: "song.getDetails&pids=",
    albumDetails: "content.getAlbumDetails&albumid="
});