import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Home-device.css';

const Home = () => (
    <div className="jumbotron" id="banner">
        <div id="introduction">
            <h1>Hi! I'm Fahmi.</h1>
            <br/>
            <h2>Front-End Engineer, UI/UX Designer, Illustrator.</h2>
            <br/><br/>
            <Link to='/projects'>
                <button className="button-big" id="btn-banner">See What I'm Capable Of</button>
            </Link>
        </div>
        <div className="fa-2x" id="contact-icons">
            <a href="https://www.github.com/ahmadfahmip" target="_blank">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/ahmad.fahmi.pratama" target="_blank">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/ahmadfahmipratama" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/afahmip" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.behance.net/afahmip" target="_blank">
                <i className="fab fa-behance"></i>
            </a>
        </div>
    </div>
);

export default Home;