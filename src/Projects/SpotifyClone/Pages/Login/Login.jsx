import React from "react";
import styled from "styled-components";
import {
  BlackLogo,
  clientId,
  redirectUrl,
  apiUrl,
  scope,
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

export default function Login() {
  const handleClick = () => {
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img src={BlackLogo} alt="spotify" />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}
