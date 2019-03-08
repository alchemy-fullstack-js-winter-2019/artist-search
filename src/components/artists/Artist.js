import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  const { name } = artist;
  return (
    <>
      <li>{name}</li>
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.object
};

export default Artist;
