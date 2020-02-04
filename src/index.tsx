import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import Nav from "./Layout/nav_cmp";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
