import React from 'react';
import { shallow } from 'enzyme';
import WorkDetail from './WorkDetail';

jest.mock('../services/artistApi');

describe('Work Details', () => {
  it('renders work lyrics', () => {
    const wrapper = shallow(<WorkDetail 
      match={{ params: { name: 'Bob', title: 'Bob and his Greatest Hits' } }}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
