import React, { Component } from 'react';
import './css/Project.css';
import './css/Project-device.css';
import kultiva from './img/project/kultiva.jpeg';
import helpie from './img/project/helpie.jpeg';
import dewaweb from './img/project/dewaweb.jpg';

class Project extends Component {
    render() {
        return (
            <div className="container-fluid row" id="uiux-section">
                <h1>UI/UX Projects</h1>
                <p>Various design from mobile to desktop size.</p>
                <br/>
                <div className="row">
                    <div className="col uiux-part">
                        <a href="kultiva.html" target="_blank">
                            <div>
                                <img src={kultiva} alt="kultiva"/>
                            </div>
                        </a>
                    </div>
                    <div className="col uiux-part">
                        <a href="helpie.html" target="_blank">
                            <div>
                                <img src={helpie} alt="helpie"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col uiux-part">
                        <a href="dewaweb.html" target="_blank">
                            <div>
                                <img src={dewaweb} alt="dewaweb"/>
                            </div>
                        </a>
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
        );
    }
}

export default Project;