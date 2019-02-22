import React from 'react';
import PropTypes from 'prop-types';

function Works({ results }) {
    const worksList = results.map(work => {
        return <li key={work.id}> {work.title}</li>;
    });
    return (
        <ul>{worksList}</ul>
    );
}

Works.propTypes = {
    results: PropTypes.array,
};

export default Works;
