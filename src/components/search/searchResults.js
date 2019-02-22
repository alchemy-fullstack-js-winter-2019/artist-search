import React from 'react';
import PropTypes from 'prop-types';
import SearchedArtist from './SearchedArtist';

function SearchResults({ results }) {
    const searchList = results.map(searched => {
        const send = { name: searched.name, id: searched.id };
        return <li key={searched.id}> <SearchedArtist 
            values={send}
        /></li>;
    });
    return (
        <ul>{searchList}</ul>
    ); 
}

SearchResults.propTypes = {
    results: PropTypes.array,
};

export default SearchResults;
