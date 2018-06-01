import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import Project from './Project';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed : 0,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      elapsed: new Date() - this.props.start,
    })
  }

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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Sudah {seconds} detik sejak ini dijalankan.</p> */}
      </div>
    );
  }
}

export default App;
