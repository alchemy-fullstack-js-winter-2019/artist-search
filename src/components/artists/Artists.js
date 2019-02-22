import React, { PureComponent } from 'react';
import Artist from './Artist';
import { getArtists } from '../../services/getArtistsApi';

export default class Artists extends PureComponent {
    state = {
      artists: []
    };
    componentDidMount() {
      getArtists()
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

