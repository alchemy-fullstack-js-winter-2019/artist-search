import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';


describe('<Search />', () => {
  it('can search', () => {
    const wrapper = shallow(<Search />);
    wrapper.find('input').simulate('change', {
      target: {
        name: 'text',
        value: 'Nirvana'
      }
    });

    expect(wrapper.state().text).toEqual('Nirvana');
  });
});
