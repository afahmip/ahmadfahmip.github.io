import React, { Component } from 'react';
import Radium from 'radium';

class RoundButton extends Component {
    state = {
        outline: this.props.outline,
        foreground: this.props.foreground,
        background: this.props.background,
        fontSize: this.props.fontSize,
        text: this.props.text
    }

    render() {
        var style = {
            color: this.state.foreground,
            backgroundColor: this.state.background,
            fontSize: this.state.fontSize,
            border: '2px solid ' + this.state.outline,
            borderRadius: '50px',
            padding: '10px 32px',
            margin: '2vh 2vw',
            fontFamily: 'Barlow',
            textAlign: 'center',
            textDecoration: 'none',
            transitionDuration: '0.4s',
            cursor: 'pointer',
            ":hover": {
                backgroundColor: this.state.outline,
                color: this.state.backgroundColor
            }
        }

        return (
            <button style={style}>{this.state.text}</button>
        );
    }
}

export default RoundButton;