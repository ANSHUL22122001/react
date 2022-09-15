import { Typography } from '@mui/material';
import React from 'react';
import { logo } from "../../Utils/Constants";
import NavbarSidebar from './NavbarSidebar';

function NavbarLeft() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
      >
        <NavbarSidebar />
        <img src={logo} alt="logo" height={30} />
        <Typography 
            color="white" 
            sx={{
                pl: 1,
                fontWeight:'700'
            }}
        >
            MyTube
        </Typography>
    </div>
  );
}

export default NavbarLeft