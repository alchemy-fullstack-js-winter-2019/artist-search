import React from 'react';
import renderer from 'react-test-renderer';
import Artist from './Artist';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const artist = {
      name: 'Nirvana',
      country: 'US'
    };
    const tree = renderer.create(
      <Artist artist={artist}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

