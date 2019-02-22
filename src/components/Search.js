import React, { Component } from 'react';
import Artists from './artists/Artists';
import { getArtists } from '../services/getArtistsApi';

export default class Search extends Component {
  state = {
    artists: [],
    query: ''
  };

  getSearchedArtists() {
    getArtists(this.state.query)  
      .then(response => {
        this.setState({ artists: response.artists });
      });
  }
 
  handleSearch = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.getSearchedArtists();
  };

  render() {
    const { artists } = this.state;
    return (
      < >
      <h1>Sup Searchie</h1>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="query" onChange={this.handleSearch} />
        <button>Yo</button>
      </form>
     {artists && <Artists artists={artists}/>}
      </>
    );
  }
}

