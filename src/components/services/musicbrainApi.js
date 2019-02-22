export const getArtist = (artist) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
        .then(res => {
            return res.json();
        });
};

