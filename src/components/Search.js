import React, { Component } from 'react';
import Artists from './artists/Artists';


export default class Search extends Component {
  state = {
    // artists: [],
    query: null
  };


  onSubmit(event) {
    event.preventDefault();
    console.log('hello');

  }

  render() {
    const { query } = this.state;
    return (
      < >
      <h1>Sup Searchie</h1>
      <form onSubmit={this.onSubmit}>
        <input type="text"></input>
        <button>Yo</button>
      </form>
      <Artists query={query}/>
      </>
    );
  }
}

