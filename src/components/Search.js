import React, { Component } from 'react';
import Artists from './artists/Artists';
import { getArtists } from '../services/getArtistsApi';
import Paging from './paging/Paging';

export default class Search extends Component {
  state = {
    artists: [],
    query: '',
    currentPage: 1,
    totalPages: null
  };

  makeOffset = () => {
    return (this.state.currentPage - 1) * 25;
  };

  makeTotalPages = count => {
    return Math.floor(count / 25);
  };

  getSearchedArtists() {
    const offset = this.makeOffset();
    getArtists(this.state.query, offset)  
      .then(response => {
        const count = this.makeTotalPages(response.count);

        this.setState({ 
          artists: response.artists,
          totalPages: count 
        });
      });
  }
 
  handleSearch = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.getSearchedArtists();
  };

  increaseCount = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage === totalPages) return;
    this.setState({ currentPage: currentPage + 1 });
  };

  decreaseCount = () => {
    const { currentPage } = this.state;
    if(currentPage === 1) return;
    this.setState({ currentPage: currentPage - 1 });
  };

  render() {
    const { artists, currentPage, totalPages } = this.state;
    return (
      < >
      <h1>Sup Searchie</h1>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="query" onChange={this.handleSearch} />
        <button>Yo</button>
      </form>
      {totalPages && <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        increaseCount={this.increaseCount}
        decreaseCount={this.decreaseCount}
      />}
     {artists && <Artists artists={artists}/>}
      </>
    );
  }
}

