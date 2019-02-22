import React, { PureComponent } from 'react';
import { getWorks } from '../services/musicbrainApi';
import Works from './Works';
import PropTypes from 'prop-types';

export default class Artist extends PureComponent {

    state = {
        works: [],
        id: this.props.match.params.id
    }

    getWorksApi  = () => {
        getWorks(this.state.id)
            .then(res => {
                this.setState({ works: res.works });
                console.log(res.works);
            });
    }

    componentDidMount() {
        this.getWorksApi();
    }
    
    render() {
        console.log('props', this.props);
        const { works } = this.state;  
        return (
            <>
                <h1> Artist component</h1>
                <Works results={works} />
            </>
        );
    }
}

Artist.propTypes = {
    match: PropTypes.object

};
