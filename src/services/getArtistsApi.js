
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
      name: json.name,
      works: json.works
    }));
};

export const getLyrics = (artistName, songLyrics) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songLyrics}`)
    .then(res => res.json())
    .then(json => ({
      songLyrics: json.lyrics
    }));
};


