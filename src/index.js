import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Root from './containers/Root';

render(
  <Provider store={configureStore()}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
