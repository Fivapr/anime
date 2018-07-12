import React from 'react';
import { connect } from 'react-redux';
import { getField } from './selectors';

const Player = ({ field }) => (
  <div>
    {field}
  </div>
);

export default connect(
  { field: getField(state) },
  null,
)(Player);
