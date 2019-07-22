import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
