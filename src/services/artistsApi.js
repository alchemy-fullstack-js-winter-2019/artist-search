export const getArtists = () => {
  return fetch('http://musicbrainz.org/ws/2/artist?query=nirvana&fmt=json&limit=25', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      results: json.artists
    }));
};
