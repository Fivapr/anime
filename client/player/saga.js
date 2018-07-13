import { call, put, takeLatest } from 'redux-saga/effects';
import { action } from './reducer';

export function* actionSaga() {
  try {
    console.log('Alo Saga');
  } catch (error) {
    console.log(error.message);
  }
}

export default function* () {
  yield takeLatest(action, actionSaga);
}
