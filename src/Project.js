import React, { Component } from 'react';
import './Project.css';

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
                                <img src="img/project/kultiva.jpeg" alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className="col uiux-part">
                        <a href="helpie.html" target="_blank">
                            <div>
                                <img src="img/project/helpie.jpeg" alt=""/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col uiux-part">
                        <a href="dewaweb.html" target="_blank">
                            <div>
                                <img src="img/project/dewaweb.jpg" alt=""/>
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