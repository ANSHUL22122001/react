import React from 'react';
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";

function NavbarRight() {
    return (
      <Stack direction="row" spacing={1} sx={{pr:2}}>
        <IconButton>
          <VideoCallIcon fontSize="medium" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon fontSize="medium" sx={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <AccountCircleIcon fontSize="medium" sx={{ color: "white" }} />
        </IconButton>
      </Stack>
    );
}

export default NavbarRight