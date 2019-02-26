import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/getArtistsApi';
import SongLyrics from './SongLyric';

export default class Song extends Component {
  state = {
    songLyrics: ''
  };

  static propTypes = {
    workTitle: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
  };

  getSongLyrics = () => {
    console.log(this.props.artistName, 'hello');
    getLyrics(this.props.artistName, this.props.workTitle)
      .then(response => {
        console.log('response', response.songLyrics);
        this.setState({ songLyrics: response.songLyrics });
      });
  }

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

