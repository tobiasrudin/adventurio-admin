import React, { Component } from "react";
import "./Login.css";
import LoginInfo from "../LoginInfo/LoginInfo";
import tropicalBeachImage from "../../images/tropical-beach.jpg";
import japanImage from "../../images/japan.jpg";
import CrossfadeImage from "react-crossfade-image/index.es5";
import whiteImage from "../../images/white-image.png";

let imageSrc = japanImage;
let imageIndex = 0;
let interval;

class Login extends Component {
  state = {
    imageSrc: tropicalBeachImage
  };
  componentDidMount() {
    const imageArray = [tropicalBeachImage, japanImage];
    const setImageSrc = () => {
      ++imageIndex;
      if (imageIndex >= imageArray.length) {
        imageIndex = 0;
      }
      imageSrc = imageArray[imageIndex];
      this.setState({ imageSrc: imageSrc });
    };
    interval = setInterval(setImageSrc, 15000);
  }
  componentWillUnmount() {
    clearInterval(interval);
  }
  render() {
    return (
      <div className="login-main">
        <div className="image-container">
          <div className="image-item">
            <CrossfadeImage
              src={this.state.imageSrc}
              duration={2500}
              alt="Adventures around the world"
            />
          </div>
        </div>
        <div className="filler-container">
          <div className="filler-item">
            <img src={whiteImage} className="polygons" alt="white filler" />
          </div>
        </div>
        <div className="text-container">
          <div className="title-item">
            <p className="title-text">ADVENTÜRIO</p>
            <p className="title-sub-text">The adventure starts here</p>
          </div>
          <div className="text-item">
            <LoginInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
