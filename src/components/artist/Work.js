import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




function ArtistWork({ values }) {
    const { work, song } = values;

    return (
        <Link to={`/songs/${song}/${work}`}>
            <h2> {work}</h2>
            <h2> {song}</h2>
        </Link>
    );
}
ArtistWork.propTypes = {
    values: PropTypes.object,
};

export default ArtistWork;
