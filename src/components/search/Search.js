import React, { PureComponent } from 'react';
import { getArtist } from '../services/musicbrainApi';

export default class Search extends PureComponent {
    state = {
        artist: null,
        results: []
    };

    handleSearch = ({ target }) => {
        
        this.setState({ [target.name]: target.value });
    }
    getArtistApi  = (event) => {
        event.preventDefault();
        getArtist(this.state.artist)
            .then(res => {
                this.setState({ results: res.artists });
                console.log(res.artists);
            });
    }

    render() {
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
