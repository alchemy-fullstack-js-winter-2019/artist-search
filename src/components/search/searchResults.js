import React from 'react';
import PropTypes from 'prop-types';
// import SearchedArtist from './SearchedArtist';

function SearchResults({ results }) {
    console.log('results', results);
    const searchList = results.map(searched => {
        return <li key={searched.id}>{searched.name} </li>;
    });
    return (
        <ul>{searchList}</ul>
    ); 
}

SearchResults.propTypes = {
    results: PropTypes.array
};

export default SearchResults;
