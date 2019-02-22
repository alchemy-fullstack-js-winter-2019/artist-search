import React from 'react';
import PropTypes from 'prop-types';
import Work from './Work';

function Works({ results }) {
    
    const worksList = results.map(work => {
        const send = { song: work.title, work: work.id };

        console.log('send', send);
        return <li key={work.id} > <Work values={send}/></li>;
    });
    return (
        <ul>{worksList}</ul>
    );
}

Works.propTypes = {
    results: PropTypes.array,
};

export default Works;
