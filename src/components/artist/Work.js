import React from 'react';
import PropTypes from 'prop-types';

function Work({ values }) {
    const { song, artistName } = values;
    console.log('WORK COMP', values.song);

    return (
        <>
            <h2> {song}</h2>
            <h2> {artistName}</h2>
        </>
    );
}
Work.propTypes = {
    values: PropTypes.object,
};

export default Work;
