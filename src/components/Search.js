import React, { Component } from 'react';
import Artists from './artists/Artists';


export default class Search extends Component {
  state = {
    // artists: [],
    query: 'Nirvana'
  };


  onSubmit(event) {
    event.preventDefault();
    console.log('hello');
  }

  handleChange = ({ target }) => {
    // const { query } = this.state;
    this.setState({ [target.name]: target.value }, () => {
      console.log('input yo');
    });
  }

  render() {
    const { query } = this.state;
    return (
      < >
      <h1>Sup Searchie</h1>
      <form onSubmit={this.onSubmit}>
        <input onChange={this.handleChange} type="text" name="query" value={query}/>
        <button>Yo</button>
      </form>
      <Artists query={query}/>
      </>
    );
  }
}

