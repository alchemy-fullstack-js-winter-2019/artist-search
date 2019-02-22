export const getArtist = (name) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`)
        .then(res => {
            return res;
        });
};

