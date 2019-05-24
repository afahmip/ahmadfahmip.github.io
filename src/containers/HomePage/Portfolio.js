import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PortoItem from './PortoItem'
import mock from 'assets/img.png'
import portfolio from 'mocks/portfolio.json'
import './index.scss'

class Portfolio extends Component {
  render () {
    Array.prototype.isArray = true
    const items = []
    portfolio.map(data => {
      if (data.isArray) {
        let arr = []
        data.map(d => arr.push(
          <PortoItem title={d.title} url={mock} />
        ))
        items.push(
          <div className="row mobile">{arr}</div>
        )
      } else {
        items.push(
          <PortoItem title={data.title} url={mock} />
        )
      }
    })

    return (
      <div id="portfolio" className="center-horizontal">
        {items}
      </div>
    )
  }
}

export default Portfolio