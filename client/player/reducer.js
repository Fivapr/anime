import { createAction, createReducer } from 'redux-act';
import { fromJS } from 'immutable';

const initialState = fromJS({
  field: 'Test',
});

export const action = createAction();

const reducer = createReducer({}, initialState)
  .on(action, (state, payload) => state.set('field', 'test player store'));

export default reducer;
