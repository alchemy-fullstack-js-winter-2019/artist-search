import React, { Component } from 'react';
import { getArtists } from './services/artistApi';
import { ArtistsWithPaging } from './artists/Artists';

export default class Search extends Component {
  state = {
    artistText: '',
    artists: [],
    totalPages: 1
  }
  handleSearch = event => {
    event.preventDefault();
    getArtists({ search: this.state.artistText, page: 1 })
      .then(res => {
        this.setState({ artists: res.results, totalPages: res.totalPages });
        console.log(this.state.totalPages);
        console.log(res.totalPages);
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artistText, artists, totalPages } = this.state;
    return (
    <>
      <h1>Search!!!</h1>
      <form onSubmit={this.handleSearch}>
        <label>
          Search Name:
          <input type="text" name="artistText" value={artistText} onChange={this.handleChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Paging>
        
      </Paging>
      <ArtistsWithPaging 
        artists={artists} 
        totalPages={totalPages} />
    </> 
    );
  }
}
