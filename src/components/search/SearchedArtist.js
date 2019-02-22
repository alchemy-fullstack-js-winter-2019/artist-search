import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function SearchedArtist({ values }) {
    const { id, name } = values;

    
    return (
        <Link to={`/artist/${id}`}>
            <h2>{name}</h2>
            <h2>{id}</h2>
        </Link>
    );
}
SearchedArtist.propTypes = {
    values: PropTypes.object,
};

export default SearchedArtist;

