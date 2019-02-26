const results = [
  {
    id: '1',
    title: 'song1'
  },
  {
    id: '2',
    title: 'song2'
  },
  {
    id: '3',
    title: 'song3'
  }
];

export const getArtistDetail = () => {
  return Promise.resolve({
    results
  });
};
