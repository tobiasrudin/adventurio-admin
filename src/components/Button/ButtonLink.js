import React, { Component } from "react";
import "../Button/Button.css";
import { withRouter } from "react-router";

class ButtonLink extends Component {
  render() {
    const {
      history,
      location,
      match,
      staticContext,
      to,
      onClick,
      ...rest
    } = this.props;

    return (
      <button
        {...rest}
        onClick={event => {
          onClick && onClick(event);
          history.push(to);
        }}
        className={`${this.props.colour} ${this.props.buttonstyle}`}
      >
        {this.props.text}
      </button>
    );
  }
}

export default withRouter(ButtonLink);
