import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Sidebar, Navbar, Footer } from "./../../Components";
import Body from "./Body";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Utils/ApiCalls";
import { setUserInfo } from "../../Redux/actions/stateActions";

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
  const token = useSelector((state) => state.TOKEN);
  const dispatch = useDispatch();
  let bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyScrolled = async () => {
    bodyRef?.current?.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef?.current?.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserInfo(token);
      await dispatch(setUserInfo(data));
    };
    getUserData();
  }, [token, dispatch]);
  return (
    <SpotifyContainer>
      <SpotifyBody>
        <Sidebar />
        <div className="SpotifyBodyNavbar" re={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="SpotifyBodyContent">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </SpotifyBody>
      <Footer />
    </SpotifyContainer>
  );
};

export default Spotify;
