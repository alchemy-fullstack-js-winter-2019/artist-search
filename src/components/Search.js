import React, { Component } from 'react';
import { getArtists } from '../services/artistsApi';
import Artist from '../components/artists/Artist';

export default class Search extends Component {
  state = {
    text: '',
    results: []
  };

  componentDidMount() {
    getArtists()
      .then(response => {
        this.setState({ artists });
      });
  }

  render() {
    const artists = this.state.artists.map(artist => {
      return (
        <Artist key={artist.id} artist={artist}/>
      // <>
      //   <h1>Search for an Artist:</h1>
      //   <form>
      //     <input name="text" value={text} onChange={this.handleChange}></input>
      //     <button>SEARCH</button>
      //   </form>
      // </>
      );

    });
    return (
      <ul>
        {artists}
      </ul>
    );
  }
}
