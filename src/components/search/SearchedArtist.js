import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';


function SearchedArtist({ values }) {
    const { id, name } = values;

    
    return (
        <>
        <Router>
            <Link to={`/${name}/${id}`}>
                <h2>{name}</h2>
                <h2>{id}</h2>
            </Link>
        </Router>
        </>
    );
}
SearchedArtist.propTypes = {
    values: PropTypes.object,
};

export default SearchedArtist;

