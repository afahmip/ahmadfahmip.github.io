import React from 'react';
import './css/Kultiva.css';
import './css/Kultiva-device.css';
import farmer from './img/project/kultiva/farmer.jpeg';
import twoapp_min from './img/project/kultiva/twoapp-min.png';
import order from './img/project/kultiva/order.png';

const Kultiva = () => (
    <div>
        <div className="jumbotron banner">
            <h1>KULTIVA</h1>
            <p>IFest 2018 Hackathon Runner-Up</p>
            <div className="row">
                <div className="col-md-4">
                    <p><b>Role:</b> UI/UX Designer</p>
                </div>
                <div className="col-md-4">
                    <p><b>Location:</b> Yogyakarta, Indonesia</p>
                </div>
                <div className="col-md-4">
                    <p><b>Date:</b> May 2018</p>
                </div>
            </div>
        </div>

        <div className="container-fluid" id="intro">
            <div className="row">
                <div className="col-md-6 right">
                    <h1>Shortening distribution channel.</h1>
                    <br/>
                    <p>We focus on how to shorten product distribution channel by providing e-commerce for both farmers and consumers. Farmers can sell their product directly to the consumers.</p>
                </div>
                <div className="col-md-6 left">
                    <img src={farmer} alt="" />
                </div>
            </div>
        </div>

        <div className="container-fluid" id="two-apps">
            <div className="col-md-5">
                <h1 className="sub-title">TWO CLIENT-SIDE APPS</h1>
                <br/>
                <p>Our solution is to build two different app for each user. Farmers can put their product catalogue and prices, then consumers can see available products provided.</p>
                <br/>
            </div>
            <div className="col-md-7">
                <img src={twoapp_min} alt="" />
            </div>
        </div>

        <div>      
        </div>
        <div className="container-fluid" id="order">
            <div className="col-md-7">
                <img src={order} alt="" />
            </div>
            <div className="col-md-5">
                <h1 className="sub-title">SMART ORDER</h1>
                <br/>
                <p>Handles large volume orders by distributing the order into smaller several orders so it can be handled by farmers (partners) with optimal location.</p>
            </div>
        </div>

        <footer>
            <i className="fas fa-heart"></i>
            <h1>Thanks for watching!</h1>
            <br/><br/>
            <div className="fa-2x">
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
        </footer>
    </div>
);

export default Kultiva;