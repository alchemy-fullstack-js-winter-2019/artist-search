import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Artists({ artists }) {


  const makeArtists = artists.map(artist => {
    console.log(artist, 'artistscomponent');
    return (<Link to={`/artist/${artist.id}`} key={artist.id} ><Artist artist={artist}/></Link>);
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
