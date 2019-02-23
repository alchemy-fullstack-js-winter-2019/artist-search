import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { getArtistSongs } from '../../services/getArtistsApi';


export default class Songs extends PureComponent {
  state = {
    works: []
  };

    static propTypes = {
      match: PropTypes.shape({ 
        params: PropTypes.shape({ 
          id: PropTypes.string
        })  
      })
    };
   
    getSongs = () => {
      getArtistSongs(this.props.match.params.id)
        .then(response => {
          this.setState({ works: response.works });
        });
    }
    render() {
      const { works } = this.state;
      console.log(this.props.match.params.id);
      return (
        <>
        <button onClick={this.getSongs}> Get Songs</button>
        {works && <Song works={works} /> }
        </>
      );
    }
  
}
