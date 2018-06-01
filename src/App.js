import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import Project from './Project';
import './App.css';

class App extends Component {
  render() {
    const elapsed = Math.round(this.state.elapsed / 100);
    const seconds = (elapsed / 10).toFixed(1);
    return (
      <div className="App">
        {/* <div className='Menu'>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Project</Link>
        </div> */}
        <div className="App-content">
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
