import React, { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import LinearProgress from "@mui/material/LinearProgress";

import Spotify from "./Pages/Spotify/Spotify";
import "./App.css";

import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Provider store={store}>
      {accessToken ? (
        <Spotify />
      ) : loading ? (
        <LinearProgress color="success" />
      ) : (
        <Login setAccessToken={setAccessToken} setLoading={setLoading} />
      )}
    </Provider>
  );
};

export default App;
