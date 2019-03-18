import React, { Component } from "react";
import "./LoginInfo.css";
import Button from "../Button/Button";

class LoginInfo extends Component {
  render() {
    return (
      <div className="login-info-main">
        <Button
          onClick={() => {}}
          colour={"primary"}
          buttonStyle={"outline-primary"}
          text={"Create new game"}
        />
        <input />
        <Button
          onClick={() => {}}
          colour={"accent"}
          buttonStyle={"outline-accent"}
          text={"Edit saved game"}
        />
        <input />
      </div>
    );
  }
}

export default LoginInfo;
