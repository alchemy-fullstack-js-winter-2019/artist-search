import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

jest.mock('../../services/getArtistsApi');

describe('Songs', () => {
  it('simulates click events', done => {
    const match = { params: { id: 'Beans' } };
    const wrapper = shallow(<Songs match={match}/>);
    setTimeout(() => {
      expect(wrapper.state().works).toHaveLength(25);
      done();
    }, 500);
  });
});
