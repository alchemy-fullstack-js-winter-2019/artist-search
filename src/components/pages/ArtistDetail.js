import React, { PureComponent } from 'react';
import { getArtistDetail } from '../services/artistApi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ArtistDetail extends PureComponent {
  state = {
    works: []
  }
  static propTypes = {
    match: PropTypes.object
  }

  // fetchArtists = async() => {
  //   const works = await getArtistDetail(this.props.match.params.id);
  //   this.setState({ works });
  // };

  componentDidMount() {
    getArtistDetail(this.props.match.params.id)
      .then(res => {
        this.setState({ works: res.results });
      });
    // this.fetchArtists();
  }


  render() {
    const works = this.state.works.map(work => {
      return (
        <Link key={work.id} to={`/artistDetail/${work.id}`}><li>{work.title}</li></Link>
      );
    });
    return (
      <ul>
        { works }
      </ul>
    );
  }
}
