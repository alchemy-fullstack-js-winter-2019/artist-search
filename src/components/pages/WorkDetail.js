import React, { PureComponent } from 'react';
import { getWorkDetail } from '../services/artistApi';
import PropTypes from 'prop-types';

export default class ArtistDetail extends PureComponent {
  state = {
    lyrics: ''
  }
  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const { name, title } = this.props.match.params;
    getWorkDetail(name, title)
      .then(res => {
        const lyrics = res.results;
        this.setState({ lyrics: lyrics ? lyrics : 'This song has no words!' });
      });
  }


  render() {
    
    return (
      <>
        <h2>{this.props.match.params.title}:</h2>
        { this.state.lyrics }
      </>
    );
  }
}
