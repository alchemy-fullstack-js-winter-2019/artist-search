export const getText = state => state.text;

export const getArtistText = state => state.artistText;

export const getPageResults = state => ({
  artists: state.artists,
  totalPages: state.totalPages
});
