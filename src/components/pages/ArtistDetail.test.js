import React from 'react';
import { shallow } from 'enzyme';
import ArtistDetail from './ArtistDetail';

jest.mock('../services/artistApi');

describe('Artists', () => {
  it('renders a list of artist works', () => {
    const wrapper = shallow(<ArtistDetail 
      match={{ params: { id: '9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6' } }}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
