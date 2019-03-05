import React, { PureComponent } from 'react';
import { getArtist } from '../services/musicbrainApi';
import SearchResults from './SearchResults';

export default class Search extends PureComponent {
    state = {
        artist: '',
        results: [],
        selectedArtist: '',
        totalPages: 1,
        page: 1
    };

    handleSearch = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    getArtistApi = (event) => {
        event.preventDefault();
        getArtist(this.state.artist, this.state.page)
            .then(res => {
                this.setState({ results: res.artists });
                this.setState({ totalPages: res.totalPages });
            });
    }

    decrementPage = () => {
        this.setState({ page: this.state.page - 1 });
    };

    incrementPage = () => {
        this.setState({ page: this.state.page + 1 });
    };

    componentDidUpdate(prevProps, prevState) {

        if(prevState.artist !== this.state.artist) {
            getArtist(this.state.artist, this.state.page)
                .then(res => {
                    this.setState({ results: res.artists });
                    this.setState({ totalPages: res.totalPages });
                });
        }
    }

    render() {
        const { results, artist, page, totalPages } = this.state;
        return (
            <>
                <h1> ARTIST SEARCH COMP</h1>
                <form onSubmit={this.getArtistApi}>
                    <label>Search for Artist
                        <input type="text" name="artist" value={artist} onChange={this.handleSearch}/>
                    </label>
                    <button >Search</button>
                </form>
                <div>
                    {page > 1 && <button onClick={this.decrementPage}>PREV</button> }
                    <span>{page}/{totalPages}</span>
                    { page < totalPages && <button onClick={this.incrementPage}>NEXT</button> }
                </div>
                <div>
                    <SearchResults
                        results={results} 
                    />
                </div>
            </>
        );
    }
}

