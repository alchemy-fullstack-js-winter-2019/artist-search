import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';

function Artists({ artists }) {


  const makeArtists = artists.map(artist => {
    return (<Artist key={artist.id} artist={artist}/>);
  });

  return (
    <>
      <ul>
        {makeArtists}
      </ul>
    </>
  );
}

Artists.propTypes = {
  artists: PropTypes.array
};

export default Artists;
