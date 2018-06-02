import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './css/Project.css';
import './css/Project-device.css';
import kultiva from './img/project/kultiva.jpeg';
import helpie from './img/project/helpie.jpeg';
import dewaweb from './img/project/dewaweb.jpg';
import Kultiva from './Kultiva';

const Project = ({ match }) => (
    <div>
        {/* <Route path={`${match.url`/:projectId`} component */}
        <Route path={`${match.url}/Kultiva`} component={Kultiva} />
        <Route exact path={match.url}
            render={() => 
                <div className="container-fluid row" id="uiux-section">
                    <h1>UI/UX Projects</h1>
                    <p>Various design from mobile to desktop size.</p>
                    <br/>
                    <div className="row">
                        <div className="col uiux-part">
                            <Link to={`${match.url}/kultiva`}>
                                <div>
                                    <img src={kultiva} alt="kultiva"/>
                                </div>
                            </Link>
                        </div>
                        <div className="col uiux-part">
                            <Link to={`${match.url}/helpie`}>
                                <div>
                                    <img src={helpie} alt="helpie"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col uiux-part">
                            <Link to={`${match.url}/dewaweb`}>
                                <div>
                                    <img src={dewaweb} alt="dewaweb"/>
                                </div>
                            </Link>
                        </div>
                        <div className="col uiux-part">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col uiux-part">
                            
                        </div>
                        <div className="col uiux-part">
                            
                        </div>
                    </div>
                </div>
            }
        />
    </div>
);

export default Project;