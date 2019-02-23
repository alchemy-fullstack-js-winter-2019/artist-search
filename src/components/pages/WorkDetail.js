import React, { PureComponent } from 'react';
import { getWorkDetail } from '../services/artistApi';
import { Link } from 'react-router-dom';
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
        this.setState({ lyrics: res.results });
      });
  }


  render() {
    
    return (
      <ul>
        { this.state.lyrics }
      </ul>
    );
  }
}
