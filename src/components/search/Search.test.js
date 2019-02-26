import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


jest.mock('../services/musicbrainApi.js');

describe('Search Test', () => {
    it('matches a snapshot', () => {
        const tree = renderer.create(
            <Search />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can search', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Search  onClick={onClick}/>
        );
        wrapper.find('#submit').simulate('click', {
            preventDefault: jest.fn()
        });
        expect(onClick).toHaveBeenCalled(1);
    });


    // it('simulates click events', () => {
    //     const onButtonClick = sinon.spy();
    //     const wrapper = mount((
    //         <Search onButtonClick={onButtonClick} />
    //     ));
    //     wrapper.find('button').simulate('click');
    //     expect(onButtonClick).to.have.property('callCount', 1);
    // });


});
