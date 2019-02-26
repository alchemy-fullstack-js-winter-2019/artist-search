import React from 'react';
import PropTypes from 'prop-types';

function SongLyrics({ songLyrics }) {
  return (
    <h1>{songLyrics}</h1> 
  );
}

SongLyrics.propTypes = {
  songLyrics: PropTypes.string.isRequired
};

export default SongLyrics;
