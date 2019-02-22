import React from 'react';
import PropTypes from 'prop-types';
import Work from './Work';

function Works({ results }) {
    
    const worksList = results.map(work => {
        const send = { name: work.title, id: work.id };

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
