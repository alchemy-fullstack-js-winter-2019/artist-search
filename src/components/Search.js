import React, { Component } from 'react';
import { getArtists } from '../services/__mocks__/artistApi';

export default class Search extends Component {
  state = {
    text: '',
    results: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <>
          <h1>Search for an Artist:</h1>
          <form>
            <input name="text" value={text} onChange={this.handleChange}></input>
            <button>SEARCH</button>
          </form>
        </>
    );
  }
}
