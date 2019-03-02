import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists', () => {
  it('renders a list of artists', () => {
    const wrapper = shallow(<Artists 
      artistText='Nirvana'
      page={1}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
