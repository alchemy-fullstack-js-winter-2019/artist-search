import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist', () => {
  it('renders an artist', () => {
    const wrapper = shallow(<Artist artist={{ name: 'bob', country: 'usa' }}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
