import React from 'react';
import PropTypes from 'prop-types';

function Lyric({ lyrics }) {
  return (
    <h1>{lyrics}</h1> 
  );
}

Lyric.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyric;
