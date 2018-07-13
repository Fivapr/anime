import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router/immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

//test action
import {action} from './player/reducer';

export const history = createBrowserHistory();
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

export default store;
