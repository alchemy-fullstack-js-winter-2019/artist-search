export const UPDATE_INPUT = 'UPDATE_INPUT';
export const updateInput = ({ name, value }) => ({
  type: UPDATE_INPUT,
  payload: { name, value }
});
