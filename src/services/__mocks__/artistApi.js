const results = [
  {
    id: '1',
    title: 'In bloom',
    name: 'Nirvana'
  },
  {
    id: '2',
    title: 'Heart shaped box',
    name: 'Nirvana'
  },
  {
    id: '3',
    title: 'Come as you are',
    name: 'Nirvana'
  },
  {
    id: '4',
    title: 'Smells like teen spirit',
    name: 'Nirvana'
  }
];

export const getArtists = () => {
  return Promise.resolve({
    totalPages: '4',
    results
  });
};
