import {
  UPDATE_INPUT
} from '../actions/search';

const initialState = {
  artistText: '',
  text: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}
