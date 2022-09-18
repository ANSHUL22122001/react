import React from "react";
import { styled } from "@mui/system";
import Playlist from "./Playlist";
import { WhiteLogo, ListItems } from "../../Utils/Constants";

const SpotifySidebar = styled("div")({
  backgroundColor: "black",
  color: "#b3b3b3",
  height: "100%",
  width: "100%",
  ".top__links": {
    display: "flex",
    flexDirection: "column",
    ".logo": {
      textAlign: "center",
      margin: "1rem 0",
      img: {
        maxInlineSize: "80%",
        blockSize: "auto",
      },
    },
  },
});

const List = styled("ul")({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  li: {
    display: "flex",
    gap: "1rem",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      color: "white",
    },
  },
});

const Sidebar = () => {
  return (
    <SpotifySidebar>
      <div className="top__links">
        <div className="logo">
          <img src={WhiteLogo} alt="spotify" />
        </div>
        <List>
          {ListItems.map((data, index) => (
            <li key={index}>
              {data.icon}
              <span>{data.name}</span>
            </li>
          ))}
        </List>
      </div>
      <Playlist />
    </SpotifySidebar>
  );
};

export default Sidebar;
