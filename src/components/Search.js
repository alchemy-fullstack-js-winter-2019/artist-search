import React, { Component } from 'react';
import Artists from './artists/Artists';


export default class Search extends Component {
  state = {
    query: ''
  };


  onSubmit = event => {
    event.preventDefault();
    console.log('form submitted');
    this.setState({ query: 'Nirvana' });
  }

  // handleChange = ({ target }) => {
  //   // const { query } = this.state;
  //   this.setState({ [target.name]: target.value }, () => {
  //     console.log('input yo');
  //   });
  // }

  render() {
    const { query } = this.state;
    return (
      < >
      <h1>Sup Searchie</h1>
      <form onSubmit={this.onSubmit}>
        <input type="text" name="query" />
        <button>Yo</button>
      </form>
      {query && <Artists query={query}/>}
      </>
    );
  }
}

