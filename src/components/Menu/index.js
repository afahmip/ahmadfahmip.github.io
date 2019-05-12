import React, { Component } from 'react'
import { Fade } from 'react-reveal'
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

  render() {
    var menuIconClass = this.state.isClicked ? 'menu-icon menu-icon__change' : 'menu-icon'
    var menuListDisplay = this.state.isClicked ? 'menu-list menu-list__change' : 'menu-list'
    return (
      <div id='menu'>
        <div className={menuIconClass} onClick={this.menuClick}>
          <div className='menu-icon__bar'/>
          <div className='menu-icon__bar'/>
          <div className='menu-icon__bar'/>
        </div>
        <div className={menuListDisplay}>
          <div className='menu-list__content'>
            <ul className='menu-list__ul'>
              <Fade delay={800}>
                <Link to='/projects'>
                  <li key='1'>
                    Projects
                    <div className='menu-list__ul-row'/>
                  </li>
                </Link>
              </Fade>
              <Fade delay={1000}>
                <Link to='#'>
                  <li key='2'>
                    Artworks
                    <div className='menu-list__ul-row'/>
                  </li>
                </Link>
              </Fade>
              <Fade delay={1200}>
                <Link to='#'>
                  <li key='3'>
                    Contact Me
                    <div className='menu-list__ul-row'/>
                  </li>
                </Link>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;