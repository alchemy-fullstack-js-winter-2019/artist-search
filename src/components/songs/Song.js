import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/getArtistsApi';
import SongLyrics from './SongLyric';

export default class Song extends Component {
  state = {
    songLyrics: ''
  };

  static propTypes = {
    match: PropTypes.shape({ 
      params: PropTypes.shape({ 
        artist: PropTypes.string,
        song: PropTypes.string
      })  
    })
  };

  getSongLyrics = () => {
    getLyrics(this.props.match.params.artist, this.props.match.params.song)
      .then(response => {
        this.setState({ songLyrics: response.songLyrics });
      });
  };

  render() {
    const { songLyrics } = this.state;
    return (
      <>
        <button onClick={this.getSongLyrics}> Get Lyrics </button>
        <SongLyrics songLyrics={songLyrics} />
      </>
    );
  }
}

