import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }) {
  return (
    <>
      <h2>{artist.name}</h2>
      {artist.country && <p>Country: {artist.country}</p>}
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
