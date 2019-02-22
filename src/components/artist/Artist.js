import React, { PureComponent } from 'react';
import { getWorks } from '../services/musicbrainApi';
import Works from './Works';
import PropTypes from 'prop-types';

export default class Artist extends PureComponent {

    state = {
        works: [],
        id: this.props.match.params.id,
        artist: this.props.match.params.name
    }

    getWorksApi  = () => {
        getWorks(this.state.id)
            .then(res => {
                this.setState({ works: res.works });
            });
    }

    componentDidMount() {
        this.getWorksApi();
    }
    
    render() {
        const { works, artist } = this.state;  
        return (
            <>
                <h1> Artist component</h1>
                <Works results={works} artist={artist} />
            </>
        );
    }
}

Artist.propTypes = {
    match: PropTypes.object

};
