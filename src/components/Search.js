import React, { Component } from 'react';
import Artists from './artists/Artists';


const results = [
  {}
];


export default class Search extends Component {
  state = {
    search: 'blahblah',
    artists: []
  };

  onSubmit() {
    console.log('hello');
  }
  getArtists() {

  }

  render() {
    return (
      < >
      <h1>Sup Searchie</h1>
      <form>
        <input type="text"></input>
        <button onClick={this.onSubmit}>Yo</button>
      </form>
      <Artists/>
      </>
    );
  }
}

