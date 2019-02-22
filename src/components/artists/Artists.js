import React, { PureComponent } from 'react';
import Artist from './Artist';
import { getArtists } from '../../services/getArtistsApi';
import PropTypes from 'prop-types';

export default class Artists extends PureComponent {
  state = {
    artists: []
  };

  static propTypes = {
    query: PropTypes.string.isRequired
  };

  componentDidMount() {
    getArtists(this.props.query)
      .then(response => {
        this.setState({ artists: response.artists });
      });
  }
  render() {
    const makeArtists = this.state.artists.map(artist => {
      return (<Artist key={artist.id} artist={artist}/>);
    });

    return (
    <>
      <ul>
        {makeArtists}
      </ul>
    </>
    );
  }
}

