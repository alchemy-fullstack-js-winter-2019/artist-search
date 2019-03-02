import {
  handleChange
} from './search';

describe('actions', () => {
  it('returns action for UPDATE_INPUT', () => {
    expect(handleChange({ name: 'text', value: 'nirva' })).toEqual({
      type: 'UPDATE_INPUT',
      payload: { name: 'text', value: 'nirva' }
    });
  });
});
