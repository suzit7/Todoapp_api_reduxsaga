import React from "react";
import ReactDOM from "react-dom";
import Mainapp from "./Mainapp";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <Mainapp />
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
  rootElement
);
