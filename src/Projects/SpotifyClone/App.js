import React, { useState } from "react";
import Login from "./Components/Login/Login";
import LinearProgress from "@mui/material/LinearProgress";

import Spotify from "./Components/Spotify/Spotify";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});

  useEffect(() => {
    console.log(accessToken);
  }, [accessToken]);

  return (
    <>
      {accessToken ? (
        <Spotify />
      ) : loading ? (
        <LinearProgress color="success" />
      ) : (
        <Login setAccessToken={setAccessToken} setLoading={setLoading} />
      )}
    </>
  );
};

export default App;
