import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
        <Menu/>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
