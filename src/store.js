import { createStore } from 'redux';
import reducer from './reducers/search';

const store = createStore(reducer);

export default store;
