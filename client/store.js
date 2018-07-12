// import { createStore, applyMiddleware, compose } from 'redux';
// import { fromJS } from 'immutable';
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from 'redux-saga';
//
// const sagaMiddleware = createSagaMiddleware();
//
// export default function configureStore({initialState = {}, rootSaga, history, reducers,}) {
//   const middlewares = [sagaMiddleware, routerMiddleware(history)];
//
//   const enhancers = [applyMiddleware(...middlewares)];
//
//   const store = createStore(rootReducer, fromJS(initialState), composeWithDevTools(...enhancers));
//
//   sagaMiddleware.run(rootSaga);
//
//   return store;
// }
