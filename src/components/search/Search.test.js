import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';
import { shallow } from 'enzyme';

jest.mock('../services/musicbrainApi.js');

describe('Search Test', () => {
    it('matches a snapshot', () => {
        const tree = renderer.create(
            <Search />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    it('Enzyme Search', (done) => {
        const wrapper = shallow(<Search />);
    
        wrapper.find('form').simulate('submit', { 
            preventDefault: jest.fn()
        });
        setTimeout(() => {
            expect(wrapper.state().results).toHaveLength(10);
            done();
        }, 500);
    });
});
