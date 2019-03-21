import React from 'react';
import renderer from 'react-test-renderer';
import Artists from './Artists';
import { MemoryRouter } from 'react-router-dom';

describe('Artists', () => {
  it('matches a snapshot', () => {
    const artists = [
      {
        id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da',
        name: 'Nirvana',
        country: 'US'
      },
      {
        id: '9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6',
        name: 'Nirvana',
        country: 'GB'
      },
      {
        id: 'c49d69dc-e008-47cf-b5ff-160fafb1fe1f',
        name: 'Nirvana',
        country: 'FR'
      }
    ];
    const tree = renderer.create(
      <MemoryRouter>
        <Artists artists={artists}/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
