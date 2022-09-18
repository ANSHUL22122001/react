import React from "react";
import { styled } from "@mui/system";
import { Sidebar, Navbar, Footer } from "./../../Components";
import Body from "./Body";

const SpotifyContainer = styled("div")(({ theme }) => ({
  backgroundColor: "red",
  maxWidth: "100vw",
  maxHeight: "100vh",
  overflow: "hidden",
  display: "grid",
  gridTemplateRows: "85vh 15vh",
}));

const SpotifyBody = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "15vw 85vw",
  height: "100%",
  width: "100%",
  background: "linear-gradient(transparent, rgba(0, 0, 0, 1))",
  backgroundColor: "rgb(32, 87, 100)",
  ".SpotifyBodyNavbar": {
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
}));

const Spotify = () => {
  return (
    <SpotifyContainer>
      <SpotifyBody>
        <Sidebar />
        <div className="SpotifyBodyNavbar">
          <Navbar />
          <div className="SpotifyBodyContent">
            <Body />
          </div>
        </div>
      </SpotifyBody>
      <Footer />
    </SpotifyContainer>
  );
};

export default Spotify;
