import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class HomePage extends Component {
  render() {
    return (
      <div id="home">
        <div className="intro page-container">
          <h1>frontend + ui/ux <span>enthusiast</span></h1>
          <h1>self-claimed <i>hackathlete</i></h1>
          <h1>based in Bandung, ID</h1>
          <p className="short-desc">Passion-driven self-taught engineer. For me, everything is an art. It's a masterpiece that must be carefully crafted.</p>
          <button className="medium row">
            <i className="fab fa-medium"></i>
            <p>&nbsp;MY LATEST ARTICLE |&nbsp;</p>
            <p>PORTFOLIO: REDESIGNED</p>
          </button>
          <div className="portfolio">
            
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;