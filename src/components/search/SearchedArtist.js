import React from 'react';
import PropTypes from 'prop-types';


function SearchedArtist({ values }) {
    const { id, name } = values;

    
    return (
        <>
            <h2>{name}</h2>
            <h2>{id}</h2>
        </>
    );
}
SearchedArtist.propTypes = {
    values: PropTypes.object
};

export default SearchedArtist;

