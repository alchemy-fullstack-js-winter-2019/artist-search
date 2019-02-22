import React, { Component } from 'react';
import Artists from './artists/Artists';


export default class Search extends Component {
  state = {
    artists: []
  };


  onSubmit() {
    console.log('hello');

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

