import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Artist extends PureComponent {
  static propTypes = {
    artist: PropTypes.object.isRequired
  }
  render() {
    const { artist } = this.props;
    return (
      <>
        <h2>{artist.name}</h2>
        {artist.country && <p>Country: {artist.country}</p>}
      </>
    );
  }
}
