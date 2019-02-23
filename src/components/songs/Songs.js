import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Song from './Song';
import { getArtistSongs } from '../../services/getArtistsApi';


class Songs extends PureComponent {
    static propTypes = {
      match: PropTypes.shape({ 
        params: PropTypes.shape({ 
          id: PropTypes.string
        })
      })
    };
   
    getSongs = () => {
      console.log(this.props.match.params.id);
      getArtistSongs(this.artistId)
        .then(response => {
          console.log('response', response);
        });
    }
    render() {
      console.log(this.props.match.params.id);
      return (
        <ul>
          <button onClick={this.getSongs}> Songs </button>
        </ul>
      );
    }
  
}

export default Songs;
