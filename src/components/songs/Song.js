import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/getArtistsApi';
import SongLyric from './SongLyric';

export default class Song extends Component {
  state = {
    songLyrics: ''
  };

  static propTypes = {
    workTitle: PropTypes.array.isRequired,
    artistName: PropTypes.string
  };

  getSongLyrics = () => {
    console.log(this.props.artistName, 'hello');
    getLyrics(this.props.artistName, this.props.workTitle)
      .then(response => {
        this.setState({ songLyrics: response.songLyrics });
      });
  }

  render() {
    const { songLyrics } = this.state;
    return (
      <>
        <button onClick={this.getSongLyrics}> Get Lyrics </button>
        <SongLyric songLyrics={songLyrics} />
      </>
    );
  }
}

