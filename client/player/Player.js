import React from 'react';
import { connect } from 'react-redux';
import { getField } from './selectors';

const Player = ({ field }) => (
  <div>
    {field}
    <h1>Test</h1>
  </div>
);

export default connect(
  { field: getField(state) },
  null,
)(Player);
