import React, { Component } from 'react';
import { ArtistsWithPaging } from '../components/artists/Artists';

export default class Search extends Component {
  state = {
    artistText: '',
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ artistText: this.state.text });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artistText, text } = this.state;
    return (
    <>
      <h1>Search!!!</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Name:
          <input type="text" name="text" value={text} onChange={this.handleChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <ArtistsWithPaging 
        artistText={artistText}
      />
    </> 
    );
  }
}
