import {
  getText,
  getArtistText
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
  
  it('returns artistText from state', () => {
    expect(getArtistText(state)).toEqual('nirvana');
  });
});
