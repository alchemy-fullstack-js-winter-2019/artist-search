import React, { PureComponent } from 'react';
import { getArtist } from '../../services/artistsApi';

export default class Artist extends PureComponent {
  state = {
    name: '',
    works: []
  };

  getArtist = () => {
    getArtist(this.state.id)
      .then(response => {
        this.setState({ works: response.results });
      });
  };

  componentDidMount() {
    this.getArtist();
  }

  render() {
    const { name, works } = this.state;
    return (
      <>
        <h1>Artist name and their works:</h1>
        <Artist results={name} works={works}/>
      </>
    );
  }
}
