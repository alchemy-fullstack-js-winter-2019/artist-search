export const UPDATE_INPUT = 'UPDATE_INPUT';
export const updateInput = ({ name, value }) => ({
  type: UPDATE_INPUT,
  payload: { name, value }
});

export const UPDATE_PAGE_RESULTS = 'UPDATE_PAGE_RESULTS';
export const updatePageResults = ({ artist, page }) => ({
  type: UPDATE_PAGE_RESULTS,
  payload: { artist, page }
});
