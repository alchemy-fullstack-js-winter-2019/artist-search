export const getArtist = (artist) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
        .then(res => {
            return res.json();
        });
};
export const getWorks = (id) => {
    return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
        .then(res => {
            return res.json();
        });
};
export const getLyrics = (title, artist) => {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res => {
            return res.json();
        });
};



