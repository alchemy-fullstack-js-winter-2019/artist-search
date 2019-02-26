import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { getArtistSongs } from '../../services/getArtistsApi';
import { Link } from 'react-router-dom';



export default class Songs extends PureComponent {
  state = {
    works: [],
    artistName: ''
  };

    static propTypes = {
      match: PropTypes.shape({ 
        params: PropTypes.shape({ 
          id: PropTypes.string
        })  
      })
    };
   
    componentDidMount() {
      getArtistSongs(this.props.match.params.id)
        .then(response => {
          this.setState({ works: response.works, artistName: response.name });
        });
    }
    render() {  
      const { artistName, works } = this.state;
      const listOfSongs = works.map(work => {
        return (<Link to={`/work/${artistName}/${work.title}` } key={work.id}> <Song /> {work.title} </Link>);
      });
      return (
        <>
        <h1> {listOfSongs}</h1>
        </>
      );
    }
  
}
