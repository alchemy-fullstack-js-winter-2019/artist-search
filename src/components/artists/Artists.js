import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Artist from './Artist';

function Artists({ artists }) {
  const listOfArtists = artists.map(artist => {
    return (<Link to={`/artist/${artist.id}`} key={artist.id}> <Artist>{artist}</Artist> </Link>);
  });

  return (
    <ul>
      {listOfArtists}
    </ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Artists;
