import { call, put, takeLatest } from 'redux-saga/effects';
import { action } from './reducer';

export function* actionSaga() {
  try {
    // yield
  } catch (error) {
    // error
  }
}

export default function* () {
  yield takeLatest(action, actionSaga);
}
