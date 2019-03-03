import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  return (
    <>
    <li>{artist.id}</li>
    <li>{artist.name}</li>
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
