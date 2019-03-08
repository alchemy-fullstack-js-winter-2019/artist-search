import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { getArtists } from '../../services/artistsApi';
import Artist from './Artist';

export default class Search extends PureComponent {
  state = {
    artists: [],
    searchTerm: ''
  };


 
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('!prevent');
    getArtists(this.state.searchTerm)
      .then(response => {
        this.setState({ artists: response.results });
      });
  };

  render() {
    const artists = this.state.artists.map(artist => {
      return (
        <Artist key={artist.id} artist={artist} />
      );
    });
    return (
      <>
        <h1>Search for an Artist:</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
          <button>Search</button>
        </form>
        <ul>
          {artists}
        </ul>
      </>
    );
  }
}
