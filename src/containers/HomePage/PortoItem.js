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
  height: 30vh;
  padding-left: 1vw;
  position: absolute;
  overflow: hidden;
  transition-duration: 0.3s;
  /* Mobile Phone */
  @media all and (max-width: 480px) {
    padding-left: 5vw;
  }
  h2 {
    margin-top: 16vh;
    font-size: 1vw;
    letter-spacing: 0.2vw;
    animation: fadein 0.3s;
    /* Mobile Phone */
    @media all and (max-width: 480px) {
      font-size: 2vh;
      letter-spacing: 0.5vh;
    }
  }
  h1 {
    font-size: 1.7vw;
    font-weight: bold;
    font-family: 'Noticia Text';
    letter-spacing: 0.2vw;
    animation: fadein .3s;
    /* Mobile Phone */
    @media all and (max-width: 480px) {
      font-size: 2.7vh;
      letter-spacing: 0.7vh;
    }
  }
  h3 {
    margin-top: 1rem;
    font-size: 0.8vw;
    letter-spacing: 0.2vw;
    animation: slidein 5s;
    /* Mobile Phone */
    @media all and (max-width: 480px) {
      font-size: 1.5vh;
      letter-spacing: 0.5vh;
    }
  }
  @keyframes fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes slidein {
    0% { margin-left: -600px; }
    10% { margin-left: 0px; }
    100% { margin-left: 0px; }
  }
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

function PortoItem(props) {
  return (
    <Frame>
      <Content className="content">
        <h2>CASE STUDY</h2>
        <h1>{props.title}</h1>
        <h3>VIEW DETAILS</h3>
      </Content>
      <Image className="image" url={props.url} />
    </Frame>
  )
}

export default PortoItem