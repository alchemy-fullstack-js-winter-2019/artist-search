import React from 'react';
import renderer from 'react-test-renderer';
import SearchedArtist from './SearchedArtist';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../services/musicbrainApi.js');

describe('SearchedArtist', () => {
    it('matches a snapshot', () => {
        const values = {
            name: 'Nirvana',
            id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da'
        };
        const tree = renderer.create(
            <Router>
                <SearchedArtist values={values} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
