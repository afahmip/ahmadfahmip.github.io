import React, { Component } from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  cursor: pointer;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  &:hover {
    >.image {
      filter: brightness(80%);
    }
    >.content {
      display: block;
    }
  }
`

const Content = styled.div`
  display: none;
  z-index: 1;
  position: absolute;
  transition-duration: 0.3s;
`

const Image = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background: ${props => `url(${props.url})` };
  background-size:  cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition-duration: 0.3s;
`

class PortoItem extends Component {
  render () {
    return (
      <Frame>
        <Content className="content">
          <h2>CASE STUDY</h2>
          <h1>INDITE! - Travel App</h1>
          <h3>VIEW DETAILS</h3>
        </Content>
        <Image className="image" url={this.props.url} />
      </Frame>
    )
  }
}

export default PortoItem