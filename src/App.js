import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'views/Home';
import Project from 'views/Project';
import Menu from 'components/partials/Menu';
import 'css/App.css';
import 'css/Fonts.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
        <Menu/>
        <Switch>
          <Route path="/projects" component={Project}/>
          <Route path="/" component={Home}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
