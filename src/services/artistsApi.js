const requestApi = () => {
  return fetch('http://musicbrainz.org/ws/2/artist?query=nirvana&fmt=json&limit=25')
    .then(res => res.json());
};

export const getArtists = () => {
  return requestApi();
};
