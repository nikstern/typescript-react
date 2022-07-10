import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import { App } from './components/App';
import { reducers } from './reducers';

const store = configureStore({
  reducer: reducers
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
  
)