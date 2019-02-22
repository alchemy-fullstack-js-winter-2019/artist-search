import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    search: 'blahblah'
  };

  onSubmit() {
    console.log('hello');
  }

  render() {
    return (
      < >
      <h1>Sup Searchie</h1>
      <button onClick={this.onSubmit}>Yo</button>
      </>
    );
  }
}

