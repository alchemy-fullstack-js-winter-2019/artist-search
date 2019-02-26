import React from 'react';
import renderer from 'react-test-renderer';
import Song from './Song';

describe('Song', () => {
  it('matches a snapshot', () => {
    const works = [
      {
        id: '02b2de82-9f31-3683-b112-419e1b86b1c5',
        title: 'Beans'
      },
      {
        id: '05ad4550-a38e-3cda-972c-900b3d335724',
        title: 'Carmen: Acte I, No. 5. Havanaise : « L\'amour est un oiseau rebelle » (Carmen, chœur)'
      }
    ];
    const tree = renderer.create(
      <Song works={works}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
