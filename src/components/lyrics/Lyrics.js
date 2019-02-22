import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Lyrics extends PureComponent {

  state = {
      song: '',
      id: this.props.match.params.id
  }

  render() {
      // const { song } = this.state;
      return (
      <>
        <h1> Lyrics Compo</h1>
      </>   
      );
  }
 
}

Lyrics.propTypes = {
    match: PropTypes.object
};
  
