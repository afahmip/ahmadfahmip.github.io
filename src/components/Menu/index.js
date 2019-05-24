import React, { Component } from 'react'
// import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import './index.scss'

class Menu extends Component {
  state = {
    isClicked: false,
    active: 1
  }

  menuClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render () {
    return (
      <div id='menu'>
        <div id="menu_header" className="center-horizontal row">
          <div className="row">
            <Link to="/" id="logo" className="hoverable">
              <h1>ahmad<b>fahmi</b></h1>
              <div />
            </Link>
          </div>
          <div id="links" className="row">
            <Link to="/" id="logo" className="hoverable">
              <h1>profile</h1>
              <div />
            </Link>
            <Link to="/" id="logo" className="hoverable">
              <h1>resume</h1>
              <div />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu