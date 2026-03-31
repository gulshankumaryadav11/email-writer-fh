import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Divider,
    AppBar,
    Toolbar,
    Chip,
    Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar({ user, setIsLoggedIn, onMenuClick }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const openMenu = (e) => setAnchorEl(e.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        closeMenu();
    };

    return (
        <AppBar 
            position="fixed" 
            sx={{
                background: "#faf8f5",
                boxShadow: "0 2px 16px rgba(0, 0, 0, 0.08)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid #e8e4df",
                zIndex: 1300,
            }}
        >
            <Toolbar sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                {/* LEFT */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
                    <IconButton
                        onClick={onMenuClick}
                        sx={{
                            color: "#2d2a26",
                            backgroundColor: "rgba(193, 127, 89, 0.1)",
                            borderRadius: 2,
                            "&:hover": {
                                backgroundColor: "rgba(193, 127, 89, 0.2)",
                                transform: "scale(1.05)",
                            },
                            transition: "all 0.3s ease",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <EmailIcon sx={{ fontSize: 28, color: "#c17f59" }} />
                        <Typography 
                            variant="h5" 
                            fontWeight={600}
                            sx={{
                                color: "#2d2a26",
                                letterSpacing: -0.5,
                            }}
                        >
                            EMIPI
                        </Typography>
                        <Chip 
                            label="PRO" 
                            size="small" 
                            sx={{
                                backgroundColor: "#c17f59",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "0.65rem",
                                height: 20,
                            }}
                        />
                    </Box>
                </Box>

                {/* RIGHT */}
                {user && (
                    <>
                        <Box
                            onClick={openMenu}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                cursor: "pointer",
                                px: 2,
                                py: 1,
                                borderRadius: 3,
                                backgroundColor: "rgba(193, 127, 89, 0.08)",
                                "&:hover": {
                                    backgroundColor: "rgba(193, 127, 89, 0.15)",
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <Badge 
                                overlap="circular" 
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                                sx={{
                                    "& .MuiBadge-badge": {
                                        backgroundColor: "#8b9a7d",
                                        color: "#8b9a7d",
                                    },
                                }}
                            >
                                <Avatar 
                                    sx={{ 
                                        bgcolor: "#c17f59",
                                        color: "#fff",
                                        width: 36,
                                        height: 36,
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        border: "2px solid rgba(193, 127, 89, 0.3)",
                                    }}
                                >
                                    {user.name[0].toUpperCase()}
                                </Avatar>
                            </Badge>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Typography variant="body2" fontWeight={600} color="#2d2a26">
                                    {user.name}
                                </Typography>
                                <Typography variant="caption" color="#6b6560" fontSize="0.75rem">
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
                                    mt: 2,
                                    minWidth: 200,
                                    borderRadius: 3,
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid #e8e4df",
                                    background: "#faf8f5",
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem disabled sx={{ opacity: 0.7 }}>
                                <Box>
                                    <Typography variant="body2" fontWeight={600} color="#2d2a26">
                                        {user.name}
                                    </Typography>
                                    <Typography variant="caption" color="#6b6560">
                                        {user.email}
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <Divider sx={{ my: 1, borderColor: "#e8e4df" }} />

                            <MenuItem 
                                onClick={() => {
                                    navigate("/profile");
                                    closeMenu();
                                }}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "rgba(193, 127, 89, 0.08)",
                                    },
                                }}
                            >
                                <PersonIcon sx={{ mr: 2, color: "#c17f59" }} /> 
                                <Typography fontWeight={500} color="#2d2a26">Profile</Typography>
                            </MenuItem>

                            <MenuItem 
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "rgba(139, 154, 125, 0.08)",
                                    },
                                }}
                            >
                                <SettingsIcon sx={{ mr: 2, color: "#8b9a7d" }} /> 
                                <Typography fontWeight={500} color="#2d2a26">Settings</Typography>
                            </MenuItem>

                            <Divider sx={{ my: 1, borderColor: "#e8e4df" }} />

                            <MenuItem 
                                onClick={logout}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "rgba(193, 127, 89, 0.08)",
                                    },
                                }}
                            >
                                <LogoutIcon sx={{ mr: 2, color: "#c17f59" }} /> 
                                <Typography fontWeight={500} color="#c17f59">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}