import React from "react";
import axios from "axios";
import styled from "styled-components";
import { clientId, Logo, apiUrl, clientSecret } from "./../../Utils/Constants";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#1db954",
  gap: "5rem",
  img: {
    height: "20vh",
  },
  button: {
    padding: "1rem 5rem",
    borderRadius: "5rem",
    backgroundColor: "black",
    color: "#49f585",
    border: "none",
    fontSize: "1.4rem",
    cursor: "pointer",
  },
}));

export default function Login({ setAccessToken, setLoading }) {
  const handleClick = async () => {
    try {
      setLoading(true);
      const data = await axios(apiUrl, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        data: "grant_type=client_credentials",
        method: "POST",
      });
      setLoading(false);
      setAccessToken(data.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <img src={Logo} alt="spotify" />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}
