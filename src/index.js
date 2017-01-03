import React from 'react';
import ReactDOM from 'react-dom';
import Caculator from './Components/Calculator';
import { Provider } from 'react-redux';

import reducers from './Reducers';

import { createStore,combineReducers,applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const composedReducer = combineReducers(reducers);
const store = createStoreWithMiddleware(composedReducer);

ReactDOM.render(
    <Provider store={store}>
        <Caculator />
    </Provider>,
  document.getElementById('root')
);
