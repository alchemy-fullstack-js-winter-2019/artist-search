import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Song from './Song';
// import getArtistSongs from '../../services/getArtistsApi';


class Songs extends PureComponent {
    static propTypes = {
      songs: PropTypes.array
    };

    render() {
      return (
        <ul>
          <h2>Hello world</h2>
        </ul>
      );
    }
  
}

export default Songs;
