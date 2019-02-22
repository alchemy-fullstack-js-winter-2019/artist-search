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
    artistText: PropTypes.string,
    updateTotalPages: PropTypes.func,
    page: PropTypes.number
  }

  static defaultProps = {
    page: 1
  }

  componentDidUpdate(prevProps) {
    if(prevProps.artistText !== this.props.artistText || prevProps.page !== this.props.page) {
      getArtists({ search: this.props.artistText, page: this.props.page })
        .then(res => {
          this.setState({ artists: res.results });
          this.props.updateTotalPages(res.totalPages);
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
