import React from 'react';
import PropTypes from 'prop-types';


function Artist({ artist }) {
  
  return (
      <>
      <li>
        <h2>{artist.name}</h2>
        <h3>{artist.country}</h3>
      </li>
      </>
  );
}


Artist.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Artist;
