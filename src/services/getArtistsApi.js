
export const getArtists = (artistName, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists,
      count: json.count
    }));
};

export const getArtistSongs = (artistID) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${artistID}?fmt=json&inc=works`)
    .then(res => res.json())
    .then(json => ({
      works: json.works
    }));
};
