import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




function ArtistWork({ values }) {
    const { work, name } = values;

    return (
        <Link to={`/${name}/${work}`}>
            <h2> {work}</h2>
            <h2> {name}</h2>
        </Link>
    );
}
ArtistWork.propTypes = {
    values: PropTypes.object,
};

export default ArtistWork;
