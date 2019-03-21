import React, { Component } from 'react';
import Search from './artists/Search';
import Paging from './paging/Paging';
import Artist from './artists/Artist';

export default class App extends Component {
  state = {
    currentPage: 2,
    totalPages: 2
  };

  incrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage + 1 }));
  };

  decrementCurrentPage = () => {
    this.setState(state => ({ currentPage: state.currentPage - 1 }));
  };

  updateTotalPages = updatedPages => {
    this.setState({ totalPages: updatedPages });
  };

 

  render() { 
    const { currentPage, totalPages } = this.state;

    return (
      <>
        <Paging
          currentPage={currentPage}
          totalPages={totalPages}
          increment={this.incrementCurrentPage}
          decrement={this.decrementCurrentPage}
        />
        <Search
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
          onChange={this.handleChange}
        />   
        <Artist
          page={currentPage}
          updateTotalPages={this.updateTotalPages}
          onChange={this.handleChange}
        />   
      </>   
    );
  }
}
