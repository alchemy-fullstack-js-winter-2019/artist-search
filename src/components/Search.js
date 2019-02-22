import React, { Component } from 'react';
import Artists from './artists/Artists';


export default class Search extends Component {
  state = {
    query: ''
  };
  
  handleSubmit = event => {
    event.preventDefault();
    // this.handleChange(event);
    console.log('form submitted', event);
  }

  handleChange = event => {
    // const { query } = this.state;
    console.log(event.target.value);
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;
    return (
      < >
      <h1>Sup Searchie</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.query} type="text" name="query" />
        <button>Yo</button>
      </form>
      {query && <Artists query={query}/>}
      </>
    );
  }
}

