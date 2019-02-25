import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './Artist';

jest.mock('../services/musicbrainApi.js');

describe('Artist Test', () => {
    it('matches a snapshot', () => {
        const match = { params : {
            id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da',
            name: 'Nirvana' }
        };
        const tree = renderer.create(
            <Artist match={match}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
