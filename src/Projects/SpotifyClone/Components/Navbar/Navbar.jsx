import React from 'react';
import { useSelector } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


const NavbarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  height: "15vh",
  position: "sticky",
  top: 0,
  transition: "0.3s ease-in-out",
  backgroundColor: "rgba(0,0,0,0.7)",
  ".searchBar": {
    backgroundColor: "white",
    width: "30%",
    padding: "0.4rem 1rem",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    input: {
      border: "none",
      height: "2rem",
      width: "100%",
      "&:focus": {
        outline: "none",
      },
    },
  },
});

const AvatarSection = styled("div")({
  backgroundColor: "black",
  padding: "0.3rem 0.4rem",
  paddingRight: "1rem",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  ".profileButton": {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    cursor: 'pointer',
    gap: "0.5rem",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    svg: {
      fontSize: "1.3rem",
      backgroundColor: "#282828",
      padding: "0.2rem",
      borderRadius: "1rem",
      color: "#c7c5c5",
    },
  },
});

const Navbar = ({navBackground}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userInfo = useSelector((state) => state.userInfo);
  return (
    <NavbarContainer>
      <div className="searchBar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
      <AvatarSection
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <div className="profileButton">
          <CgProfile />
          <span>{userInfo?.display_name}</span>
        </div>
      </AvatarSection>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </NavbarContainer>
  );
}

export default Navbar