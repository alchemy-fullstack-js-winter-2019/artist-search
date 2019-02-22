import React, { PureComponent } from 'react';
import { getArtist } from '../services/musicbrainApi';
import SearchResults from './SearchResults';

export default class Search extends PureComponent {
    state = {
        artist: '',
        results: [],
        selectedArtist: ''
    };

    handleSearch = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }
    getArtistApi  = (event) => {
        event.preventDefault();
        getArtist(this.state.artist)
            .then(res => {
                this.setState({ results: res.artists });
            });
    }
    

    render() {
        const { results, artist } = this.state;
        return (
            <>
                <h1> ARTIST SEARCH COMP</h1>
                <form>
                    <label>Search for Artist
                        <input type="text" name="artist" value={artist} onChange={this.handleSearch}/>
                    </label>
                    <button onClick={this.getArtistApi}>Search</button>
                </form>
                <div>
                    <SearchResults
                        results={results} 
                    />
                </div>
            </>
        );
    }
}
