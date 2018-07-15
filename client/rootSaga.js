import { call, put, fork, all } from 'redux-saga/effects';
import player from './player/saga';

export default function* rootSaga() {
  yield all([fork(player)]);
}
