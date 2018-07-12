import { combineReducers } from 'redux-immutable';
import player from './player/reducer';

const rootReducer = combineReducers({ player });

export default rootReducer;
