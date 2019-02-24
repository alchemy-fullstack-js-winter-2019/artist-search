import React from 'react';
import renderer from 'react-test-renderer';
import Songs from './Songs';

describe('Songs', () => {
  it('matches a snapshot', () => {
    // const works = [
    //   {
    //     id: '02b2de82-9f31-3683-b112-419e1b86b1c5',
    //     title: 'Beans'
    //   },
    //   {
    //     id: '05ad4550-a38e-3cda-972c-900b3d335724',
    //     title: 'Carmen: Acte I, No. 5. Havanaise : « L’amour est un oiseau rebelle » (Carmen, chœur)'
    //   }
    // ];
    const tree = renderer.create(
      // <Songs works={works}/>
      <Songs />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
