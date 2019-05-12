import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class HomePage extends Component {
  state = {
    medium: {
      title: '...',
      url: ''
    }
  }

  fetchMedium () {
    fetch(`https://cors.io/?https://medium.com/@afahmip/latest?format=json`)
      .then(response => response.text())
      .then(response => {
        let data = response.replace('])}while(1);</x>', '')
        data = JSON.parse(data)
        let posts = data.payload.references.Post
        let keys = Object.keys(posts)
        this.setMedium(posts[keys[0]], keys[0])
      })
      .catch(error => console.error(error))
  }

  setMedium (post, id) {
    this.setState({
      medium: {
        title: post.title.toUpperCase(),
        url: `https://medium.com/p/${id}`
      }
    })
  }

  componentDidMount () {
    this.fetchMedium()
  }

  render () {
    return (
      <div id="home">
        <div className="intro page-container">
          <h1>frontend & ui/ux <span>enthusiast</span></h1>
          <h1>self-claimed <i>hackathlete</i></h1>
          <h1 className="row">based in Bandung, ID_</h1>
          {/* <div className="tail" /> */}
          <p className="short-desc">Passion-driven self-taught engineer. For me, everything is an art.<br/>It's a masterpiece that must be carefully crafted.</p>
          <a href={ this.state.medium.url } target="_blank">
            <button className="medium">
              <div className="row">
                <i className="fab fa-medium"></i>
                &nbsp;
                <p>LATEST ARTICLE |&nbsp;</p>
                <p>{ this.state.medium.title }</p>
              </div>
              <div className="over" />
            </button>
          </a>
          <div className="portfolio">
            {/* <h1>PORTFOLIO</h1> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;