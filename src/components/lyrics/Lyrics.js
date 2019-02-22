import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../services/musicbrainApi';


export default class Lyrics extends PureComponent {

  state = {
      lyrics: '', 
      title: this.props.match.params.song,    
      artist: this.props.match.params.artistName   
          
  }

  getLyricsApi  = () => {
      getLyrics(this.state.title, this.state.artist)
          .then(res => {
              this.setState({ lyrics: res.lyrics });
          });
  }

  componentDidMount() {
      this.getLyricsApi();
  }

  render() {
      const { lyrics } = this.state;
      return (
      <>
        <h1> Lyrics Compo</h1>
        <p>{lyrics}</p>
      </>   
      );
  }  
}
Lyrics.propTypes = {
    match: PropTypes.object.isRequired
};

  
