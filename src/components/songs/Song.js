import React from 'react';
import PropTypes from 'prop-types';

function Song({ works }) {
  const listOfSongs = works.map(work => {
    return <li key={work.id} song={work}> {work.title} </li>;
  });
  return (
    <h1> {listOfSongs} </h1>
  );
}

Song.propTypes = {
  works: PropTypes.array
};

export default Song;
