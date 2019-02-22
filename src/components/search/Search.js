import React, { PureComponent } from 'react';
import { getArtist } from '../services/musicbrainApi';

export default class Search extends PureComponent {
    state = {
        artist: null,
        results: null
    };

    handleSearch = ({ target }) => {
        
        this.setState({ [target.name]: target.value });
    }
    getArtistApi  = (event) => {
        event.preventDefault();

        getArtist(this.state.artist)
            .then(res => {
                console.log(res.artists);
                this.setState({ results: res.artists });
            });
    }

   

    render() {
        const { artist } = this.state;
        return (
            <>
                <h1> ARTIST SEARCH COMP</h1>
                <form>
                    <label>Search for Artist
                        <input type="text" name="artist" onChange={this.handleSearch}/>
                    </label>
                    <button onClick={this.getArtistApi}>Search</button>
                </form>
            </>
        );
    }
}
