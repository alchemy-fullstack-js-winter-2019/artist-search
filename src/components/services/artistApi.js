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

export const getArtistDetail = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`, {
    headers: {
      'origin': null
    }
  })
    .then(res => res.json())
    .then(json => ({
      results: json.works
    }));
};

