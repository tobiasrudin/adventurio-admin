import React from "react";
import ReactDOM from "react-dom";
import LoginInfo from "./LoginInfo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
