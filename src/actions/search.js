export const UPDATE_INPUT = 'UPDATE_INPUT';
export const handleChange = ({ name, value }) => ({
  type: UPDATE_INPUT,
  payload: { name, value }
});
