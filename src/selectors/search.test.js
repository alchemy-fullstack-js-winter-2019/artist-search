import {
  getText,
} from './search';

describe('selectors', () => {
  let state = {};
  beforeEach(() => {
    state = {
      text: 'nirv',
      artistText: 'nirvana'
    };
  });

  it('returns text from state', () => {
    expect(getText(state)).toEqual('nirv');
  });
});
