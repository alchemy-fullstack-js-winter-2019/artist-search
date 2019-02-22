
export const getArtists = (artistName) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists
    }));
};

export const getArtistSongs = (artistID) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${artistID}?fmt=json&inc=works`)
    .then(res => res.json())
    .then(json => ({
      songs: json.songs
    }));
};
