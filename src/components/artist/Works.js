import React from 'react';
import PropTypes from 'prop-types';
import Work from './Work';
import { Link } from 'react-router-dom';

function Works({ results, artist }) {
    
    const worksList = results.map(work => {
        const values = { 
            song: work.title, 
            id: work.id, 
            artistName: artist
        };

        return (
            <Link to={`/songs/${values.artistName}/${values.song}`} key={work.id}>
                <li> 
                    <Work values={values}/>
                </li>
            </Link> 
        );
    });
    
    return (
        <ul>{worksList}</ul> 
    );
}

Works.propTypes = {
    results: PropTypes.array,
    artist: PropTypes.string,
};

export default Works;
