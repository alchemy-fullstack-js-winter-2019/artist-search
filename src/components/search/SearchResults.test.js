import React from 'react';
import renderer from 'react-test-renderer';
import SearchResults from './SearchResults';

jest.mock('../services/musicbrainApi.js');

describe('SearchResults Tests', () => {
    it('matches a snapshot', () => {
        const tree = renderer.create(
            <SearchResults results={[]} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
