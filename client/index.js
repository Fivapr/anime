import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router/immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

//test action
import {action} from './player/reducer';

//TODO прикрутить реакт-роутер-редакс и вынести configureStore в store.js
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = fromJS({});
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ))
);
sagaMiddleware.run(rootSaga);

//test
store.dispatch(action());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
