import React from 'react';
import { Stack } from '@mui/material';
import SearchBar from "./SearchBar";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

function Navbar() {
    return (
      <Stack
        direction="row"
        alignItems="center"
        p={1}
        sx={{
          position: "sticky",
          background: "rgba(33, 33, 33, 0.95)",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <NavbarLeft />
        <SearchBar />
        <NavbarRight />
      </Stack>
    );
}

export default Navbar;