import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class HomePage extends Component {
  render() {
    return (
      <div id="home">
        <div className="intro page-container">
          <h1>frontend & ui/ux <span>enthusiast</span></h1>
          <h1>self-claimed <i>hackathlete</i></h1>
          <h1 className="row">based in Bandung, ID_</h1>
          {/* <div className="tail" /> */}
          <p className="short-desc">Passion-driven self-taught engineer. For me, everything is an art.<br/>It's a masterpiece that must be carefully crafted.</p>
          <button className="medium">
            <div className="row">
              <i className="fab fa-medium"></i>
              &nbsp;
              <p>LATEST ARTICLE |&nbsp;</p>
              <p>HOW I GOT MY FIRST INTERNSHIP ON GOOGLE</p>
            </div>
            <div className="over" />
          </button>
          <div className="portfolio">
            {/* <h1>PORTFOLIO</h1> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;