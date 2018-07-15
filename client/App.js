import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Player from './player';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Player} />
      </Switch>
    );
  }
}

export default App;
