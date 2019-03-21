import {
  UPDATE_INPUT,
  UPDATE_PAGE_RESULTS
} from '../actions/search';
import { getArtists } from '../components/services/artistApi';

const initialState = {
  artistText: '',
  text: '',
  artists: [],
  totalPages: 1
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case UPDATE_PAGE_RESULTS:
      return getArtists({ search: action.payload.artist, page: action.payload.page })
        .then(res => ({
          ...state,
          artists: res.results,
          totalPages: res.totalPages
        }));
    default:
      return state;
  }
}
