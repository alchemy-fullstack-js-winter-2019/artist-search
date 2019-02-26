const PAGE_SIZE = 10;
const offSet = page => PAGE_SIZE * (page - 1);

export const getArtist = (artist, page = 1) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=${PAGE_SIZE}&offset=${offSet(page)}`)
        .then(res => {
            return res.json();

        })
        .then(json => ({
            artists: json.artists,
            totalPages: Math.ceil(json.count / PAGE_SIZE),
        }));
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



