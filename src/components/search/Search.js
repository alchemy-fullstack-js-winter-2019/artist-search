import React, { PureComponent } from 'react';

export default class Search extends PureComponent {
    state = {
        artist: null
    };

    handleSearch = ({ target }) => {
        console.log('target', target);
        event.preventDefault();
        this.setState({ [target.name]: target.value });
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
                    <button>Search</button>
                </form>
            </>
        );
    }
}
