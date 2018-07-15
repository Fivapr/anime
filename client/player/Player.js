import React from 'react';
import { connect } from 'react-redux';
import { getField } from './selectors';

const Player = ({field}) => (
  <h1>
    {field}
  </h1>
);

const mapStateToProps = state => ({ field: getField(state) });

export default connect(
  mapStateToProps,
  null,
)(Player);
