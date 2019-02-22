import React, { PureComponent } from 'react';

export default class Search extends PureComponent {
  state = {
    artistText: ''
  }
  handleSearch = event => {
    console.log(this.state.artistText);
    event.preventDefault();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { artistText } = this.state;
    return (
    <>
      <h1>Search!!!</h1>
      <form onSubmit={this.handleSearch}>
        <label>
          Search Name:
          <input type="text" name="artistText" value={artistText} onChange={this.handleChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </> 
    );
  }
}
