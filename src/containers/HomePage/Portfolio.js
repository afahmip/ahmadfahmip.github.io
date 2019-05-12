import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PortoItem from './PortoItem'
import mock from 'assets/img.png'
import './index.scss'

class Portfolio extends Component {
  render () {
    return (
      <div id="portfolio" className="center-horizontal">
        <PortoItem url={mock} />
        <div className="row">
          <PortoItem url={mock} />
          <PortoItem url={mock} />
        </div>
        <PortoItem url={mock} />
      </div>
    )
  }
}

export default Portfolio