import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

// Store
import { createStore } from "redux";
import myReducer from "./reducers/index";
import { Provider } from "react-redux";
const store = createStore(myReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
