import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./store/rootReducer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import GamePage from "./components/GamePage/GamePage";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/games/:id" component={GamePage} />
    </Router>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
