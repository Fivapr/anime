import React from 'react';
import { connect } from 'react-redux';
import { getField } from './selectors';

const Player = () => (
  <div>
    <h1>Test</h1>
  </div>
);

export default connect(
  null,
  null,
)(Player);
