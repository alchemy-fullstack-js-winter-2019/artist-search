import React, { PureComponent } from 'react';
import Artist from './Artist';

export default class Artists extends PureComponent {
    state = {
      artists: [
        {
          name: 'Nirvana',
          country: 'US'
        },
        {
          name: 'Nirvana',
          country: 'US'
        },
        {
          name: 'Nirvana',
          country: 'US'
        },
        {
          name: 'Nirvana',
          country: 'US'
        },
        {
          name: 'Nirvana',
          country: 'US'
        }
      ]
    };
    
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

