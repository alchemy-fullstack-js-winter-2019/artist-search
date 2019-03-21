import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';

// render allows us to append a child
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
