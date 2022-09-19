import React, { useEffect, useState } from "react";
import Login from "./Pages/Login/Login";
import { initializeToken } from "./Redux/actions/stateActions";
import { useSelector, useDispatch } from "react-redux";

import Spotify from "./Pages/Spotify/Spotify";
import "./App.css";

const App = () => {
  const [accessToken, setAccessToken] = useState(
    useSelector((state) => state.TOKEN)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleToken = async () => {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
        if (token) {
          await dispatch(initializeToken(token));
          await setAccessToken(token);
        }
      }
      document.title = "Spotify";
    };
    handleToken();
  }, [dispatch, accessToken]);

  return (
    <>
      {accessToken ? (
        <Spotify />
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
