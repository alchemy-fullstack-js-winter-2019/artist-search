import React, { PureComponent } from 'react';
import Artist from './Artist';

export default class Artists extends PureComponent {
    state = {
      artists: ['Im an artist text']
    };

    render() {
      const  { artists } = this.state;
      return (
      <>
        <Artist
          artists={artists}
        />
      </>
      );
    }
}

