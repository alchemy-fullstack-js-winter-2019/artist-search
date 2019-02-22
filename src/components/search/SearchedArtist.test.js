import React from 'react';
import renderer from 'react-test-renderer';
import SearchedArtist from './SearchedArtist';

jest.mock('../services/musicbrainApi.js');

describe('SearchedArtist', () => {
    it('matches a snapshot', () => {
        const values = {
            name: 'Nirvana',
            id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da'
        };
        const tree = renderer.create(
            <SearchedArtist values={values} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
