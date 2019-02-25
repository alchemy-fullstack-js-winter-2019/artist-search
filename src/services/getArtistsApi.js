
export const getArtists = (artistName) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists
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
  console.log(artistName, songLyrics, 'api');
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songLyrics}`)
    .then(res => res.json())
    .then(json => ({
      songLyrics: json.songLyrics
    }));
};


