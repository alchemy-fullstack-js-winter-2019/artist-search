import React, { PureComponent } from 'react';
import { getArtists } from './services/artistApi';
import Artists from './artists/Artists';

export default class Search extends PureComponent {
  state = {
    artistText: '',
    artists: []
  }
  handleSearch = event => {
    event.preventDefault();
    getArtists({ search: this.state.artistText, page: 1 })
      .then(res => {
        this.setState({ artists: res.results });
        console.log(this.state.artists);
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artistText, artists } = this.state;
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
      <Artists artists={artists} />
    </> 
    );
  }
}
