import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`${this.props.colour} ${this.props.buttonStyle}`}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
