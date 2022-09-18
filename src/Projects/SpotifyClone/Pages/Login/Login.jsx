import React from "react";
import { getToken } from "../../Utils/ApiCalls";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { initializeToken } from "../../Redux/actions/stateActions";
import {
  BlackLogo,
} from "../../Utils/Constants";

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
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      setLoading(true);
      const data = await getToken();
      setAccessToken(data);
      await dispatch(initializeToken(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <img src={BlackLogo} alt="spotify" />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}
