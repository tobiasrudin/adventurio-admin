import React, { Component } from "react";
import "./GamePage.css";

class GamePage extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="grid-container">
        <div className="text-item" />
        <div className="map-item" />
      </div>
    );
  }
}

export default GamePage;
