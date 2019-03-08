import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getArtists } from '../services/artistsApi';
import Artist from '../components/artists/Artist';

export default class Search extends PureComponent {
  state = {
    text: '',
    artists: []
  };

  componentDidMount() {
    getArtists()
      .then(response => {
        console.log('REZZY!', response);
        this.setState({ artists: response.results });
      });
  }

  render() {
    // const artists = this.state.artists.map(artist => {
    //   return (
        
    //   );
    // })
      return (
        
        <>
        <h1>HELLO</h1>
        <ul>
        {/* {artists} */}
      </ul>
        </>
    );
  }
}

//   <Artist key={artist.id} artist={artist}/>
//   // <>
//   //   <h1>Search for an Artist:</h1>
//   //   <form>
//   //     <input name="text" value={text} onChange={this.handleChange}></input>
//   //     <button>SEARCH</button>
//   //   </form>
//   // </>
// );
