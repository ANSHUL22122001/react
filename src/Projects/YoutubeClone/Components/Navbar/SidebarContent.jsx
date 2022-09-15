import React from 'react';
import { categories } from '../../Utils/Constants';
import { logo } from "../../Utils/Constants";
import { Typography } from "@mui/material";
import { Box } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function SidebarContent(props) {
  const { setChecked } = props;

  return (
    <>
      <Box
        style={{
          paddingTop: "12px",
          paddingBottom: "8px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid grey",
          background: "rgba(33, 33, 33, 0.95)",
        }}
      >
        <IconButton
          onClick={() => setChecked(false)}
          sx={{ marginRight: "15px", marginLeft: "10px" }}
        >
          <MenuIcon fontSize="medium" sx={{ color: "white" }} />
        </IconButton>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={30} />
          <Typography
            color="white"
            sx={{
              pl: 1,
              fontWeight: "700",
            }}
          >
            MyTube
          </Typography>
        </div>
      </Box>

      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          background: "rgba(33, 33, 33, 0.95)",
        }}
      >
        {categories.map((category) => (
          <button
            className="category-btn"
            style={{
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}

export default SidebarContent;