import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artists }) {

  return (
      <>
      <ul>
        {artists}
      </ul>
      </>
  );
}


Artist.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Artist;
