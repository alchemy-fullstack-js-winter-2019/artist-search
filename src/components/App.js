import React, { Component } from 'react';
import Nav from './Nav';

export default class App extends Component {
  state = {
    currentPage: 1,
    totalPages: 3
  }

  render() {
    return (
      <Nav />
    );
  }
}
