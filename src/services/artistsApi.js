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

export const getArtist = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`, {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(json => ({
      artist: json.name,
      works: json.works
    }));
};
