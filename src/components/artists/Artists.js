import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import { withPaging } from '../paging/Paging';
import { getArtists } from '../services/artistApi';

export default class Artists extends PureComponent {
  state = {
    artists: []
  }

  static propTypes = {
    artistText: PropTypes.string
  }

  componentDidUpdate(prevProps) {
    if(prevProps.artistText !== this.props.artistText) {
      getArtists({ search: this.props.artistText, page: 1 })
        .then(res => {
          this.setState({ artists: res.results });
        });
    }
  }

  render() {
    const artists = this.state.artists.map(artist => {
      return (
        <Artist key={artist.id} artist={artist} />
      );
    });
    return (
      <ul>
        {artists}
      </ul>
    );
  }
}
export const ArtistsWithPaging = withPaging(Artists);
