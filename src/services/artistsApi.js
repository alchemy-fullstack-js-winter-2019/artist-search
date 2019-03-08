export const getArtists = (searchTerm) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      results: json.artists
    }));
};
