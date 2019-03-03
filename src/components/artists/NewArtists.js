import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withPaging } from '../paging/Paging';
import Artist from './Artist';

function Artists({ artists, updateTotalPages, page }) {
  const artistsList = artists.map(artist => {
    return (
      <Link key={artist.id} to={`/artistDetail/${artist.name}/${artist.id}`}> <Artist artist={artist} /></Link>
    );
  });
  return (
    <ul>
      {artistsList}
    </ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired,
  updateTotalPages: PropTypes.func,
  page: PropTypes.number
};

Artist.defaultProps = {
  page: 1
};

export const ArtistsWithPaging = withPaging(Artists);
