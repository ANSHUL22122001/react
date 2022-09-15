import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Logo from "../../assets/images/Logo.png";

function Navbar() {
    const Nav = styled(Stack)({
        flexDirection:"row", 
        gap:"40px", 
        fontSize:"24px", 
        alignItem: "flex-end"
    });

    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            px="20px"
            sx={{
                gap: {
                    sm: "122px",
                    xs: "40px",
                },
                mt: {
                    sm: "32px",
                    xs: "20px",
                },
                justifyContent: "none",
            }}
        >
            <Link to="/">
                <img
                    src={Logo}
                    alt="logo"
                    width="48px"
                    height="48px"
                    style={{
                        margin: "0 20px",
                    }}
                />
            </Link>
            <Nav>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#3A1212",
                        borderBottom: "3px solid #FF2625",
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{
                        textDecoration: "none",
                        color: "#3A1212",
                    }}
                >
                    Exercise
                </a>
            </Nav>
        </Stack>
    );
}

export default Navbar;
