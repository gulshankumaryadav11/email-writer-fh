import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar({
    user,
    setIsLoggedIn,
    onMenuClick
}) {

    const [anchorEl, setAnchorEl] =
        useState(null);

    const navigate =
        useNavigate();

    const openMenu = (e) => {

        setAnchorEl(
            e.currentTarget
        );
    };

    const closeMenu = () => {

        setAnchorEl(null);
    };

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        setIsLoggedIn(false);

        closeMenu();
    };

    return (

        <AppBar
            position="fixed"
            sx={{
                background: "#faf8f5",
                boxShadow:
                    "0 2px 10px rgba(0,0,0,0.06)",
                borderBottom:
                    "1px solid #ece7e2",
            }}
        >

            <Toolbar
                sx={{
                    px: {
                        xs: 2,
                        sm: 3
                    }
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flex: 1
                    }}
                >

                    <IconButton
                        onClick={onMenuClick}
                        sx={{
                            color: "#2d2a26",
                            background:
                                "rgba(193,127,89,0.08)",

                            "&:hover": {
                                background:
                                    "rgba(193,127,89,0.15)"
                            }
                        }}
                    >

                        <MenuIcon />

                    </IconButton>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            color: "#2d2a26",
                            letterSpacing: "0.5px"
                        }}
                    >

                        EMIPI

                    </Typography>

                </Box>

                {user && (

                    <>

                        <Box
                            onClick={openMenu}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                cursor: "pointer",
                                px: 1.5,
                                py: 1,
                                borderRadius: 3,

                                "&:hover": {
                                    background:
                                        "rgba(193,127,89,0.08)"
                                }
                            }}
                        >

                            <Avatar
                                sx={{
                                    width: 36,
                                    height: 36,
                                    bgcolor: "#c17f59",
                                    fontSize: "1rem",
                                    fontWeight: 600
                                }}
                            >

                                {
                                    user.name[0]
                                        .toUpperCase()
                                }

                            </Avatar>

                            <Box
                                sx={{
                                    display: {
                                        xs: "none",
                                        sm: "block"
                                    }
                                }}
                            >

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 600,
                                        color: "#2d2a26"
                                    }}
                                >

                                    {user.name}

                                </Typography>

                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: "#777"
                                    }}
                                >

                                    {user.email}

                                </Typography>

                            </Box>

                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={closeMenu}
                            PaperProps={{
                                sx: {
                                    mt: 1.5,
                                    minWidth: 200,
                                    borderRadius: 3,
                                    border:
                                        "1px solid #ece7e2",

                                    boxShadow:
                                        "0 6px 24px rgba(0,0,0,0.08)"
                                }
                            }}
                        >

                            <MenuItem
                                disabled
                            >

                                <Box>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 600
                                        }}
                                    >

                                        {user.name}

                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "#777"
                                        }}
                                    >

                                        {user.email}

                                    </Typography>

                                </Box>

                            </MenuItem>

                            <Divider />

                            <MenuItem
                                onClick={() => {

                                    navigate(
                                        "/profile"
                                    );

                                    closeMenu();
                                }}
                            >

                                <PersonIcon
                                    sx={{
                                        mr: 2,
                                        color: "#c17f59"
                                    }}
                                />

                                Profile

                            </MenuItem>

                            <MenuItem>

                                <SettingsIcon
                                    sx={{
                                        mr: 2,
                                        color: "#8b9a7d"
                                    }}
                                />

                                Settings

                            </MenuItem>

                            <Divider />

                            <MenuItem
                                onClick={logout}
                            >

                                <LogoutIcon
                                    sx={{
                                        mr: 2,
                                        color: "#c17f59"
                                    }}
                                />

                                Logout

                            </MenuItem>

                        </Menu>

                    </>
                )}

            </Toolbar>

        </AppBar>
    );
}
