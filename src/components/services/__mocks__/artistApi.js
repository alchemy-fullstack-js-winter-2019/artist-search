export const getArtists = ({ page, search }) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&offset=${page}`, {
    headers: {
      'origin': null
    }
  })
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 25),
      results: json.artists
    }));
};
