import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('is an App snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON(); 
    expect(tree).toMatchSnapshot();
  });
});



