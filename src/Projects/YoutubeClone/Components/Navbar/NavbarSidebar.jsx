import React, {useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContent from "./SidebarContent";

export default function TemporaryDrawer() {
    const [checked, setChecked] = useState(false);
    return (
        <>
        <IconButton onClick={() => setChecked(true)} sx={{px:2}}>
            <MenuIcon fontSize="medium" sx={{ color: "white" }} />
        </IconButton>

        <Drawer anchor="left" open={checked} onClose={() => setChecked(false)}>
            <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setChecked(false)}
            onKeyDown={() => setChecked(false)}
            >
            <SidebarContent setChecked= { setChecked } />
            </Box>
        </Drawer>
        </>
    );
}
