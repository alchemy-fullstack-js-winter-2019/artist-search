import React, { PureComponent } from 'react';
import { getWorks } from '../services/musicbrainApi';
import Works from './Works';

export default class Artist extends PureComponent {
    state = {
        works: []
    }

    getWorksApi  = (event) => {
        event.preventDefault();
        getWorks(this.state.selectedArtist)
            .then(res => {
                this.setState({ works: res.works });
                console.log(res.works);
            });
    }

    render() {
        const { works } = this.state;  
        return (
            <>
                <h1> Artist component</h1>
                <Works results={works}/>
            </>
        );
    }
}
