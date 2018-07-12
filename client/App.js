import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Player from './player';

class App extends Component {
  render() {
    return <Player />;
  }
}

export default App;

// <Switch>
//   <Route exact path="/" component={Player} />
// </Switch>
