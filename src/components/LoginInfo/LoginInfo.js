import React, { Component } from "react";
import "./LoginInfo.css";
import ButtonLink from "../Button/ButtonLink";

class LoginInfo extends Component {
  render() {
    const uuid = "uuid";
    return (
      <div className="login-info-main">
        <ButtonLink
          to={`/games/${uuid}`}
          colour={"primary"}
          buttonstyle={"outline-primary"}
          text={"Create new game"}
        />
        <input />
        <ButtonLink
          to={`/games/${uuid}`}
          colour={"accent"}
          buttonstyle={"outline-accent"}
          text={"Edit saved game"}
        />
        <input />
      </div>
    );
  }
}

export default LoginInfo;
