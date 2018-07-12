import React from 'react';
import { connect } from 'react-redux';
import { getField } from './selectors';

const Player = ({ field }) => (
  <div>
    {field.field}
  </div>
);

export default connect(
  state => ({ field: getField(state) }),
  null,
)(Player);
