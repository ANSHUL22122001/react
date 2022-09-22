import React from "react";
import Index from './Index';
import "./App.css";

import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  );
};

export default App;
