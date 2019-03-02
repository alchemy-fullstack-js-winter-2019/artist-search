const results = [
  {
    id: '1',
    title: 'song1',
    name: 'Bob'
  },
  {
    id: '2',
    title: 'song2',
    name: 'Bill'
  },
  {
    id: '3',
    title: 'song3',
    name: 'Betty'
  }
];

const lyrics = 'Lyrrriicssss';

export const getArtistDetail = () => {
  return Promise.resolve({
    results
  });
};

export const getArtists = () => {
  return Promise.resolve({
    totalPages: '2',
    results
  });
};

export const getWorkDetail = () => {
  return Promise.resolve({
    lyrics
  });
};
