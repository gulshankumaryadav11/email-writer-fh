import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Sidebar({ activeTab, onClose }) {

    const navItems = [
        { key: "generator", label: "Generator", icon: <AutoAwesomeIcon />, path: "/generator" },
        { key: "dashboard", label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
        { key: "history", label: "History", icon: <HistoryIcon />, path: "/history" },
        { key: "profile", label: "Profile", icon: <PersonIcon />, path: "/profile" },
    ];

    return (
        <Box
            sx={{
                width: 280,
                height: "100vh",
                background: "#2d2a26",
                color: "#faf8f5",
                px: 3,
                py: 4,
                overflow: "hidden",
                position: "fixed",
                left: 0,
                top: 0,
            }}
        >
            <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 4, color: "#faf8f5" }}>
                EMIPI
            </Typography>

            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.key}
                        component={Link}
                        to={item.path}
                        onClick={() => {
                            if (onClose) onClose();
                        }}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            display: "flex",
                            gap: 2,
                            py: 1.5,
                            textDecoration: "none",
                            background:
                                activeTab === item.key
                                    ? "rgba(193, 127, 89, 0.3)"
                                    : "transparent",
                            "&:hover": {
                                background: activeTab === item.key 
                                    ? "rgba(193, 127, 89, 0.3)" 
                                    : "rgba(193, 127, 89, 0.1)",
                            },
                            transition: "all 0.2s ease",
                        }}
                    >
                        <ListItemIcon sx={{ color: activeTab === item.key ? "#c17f59" : "#faf8f5", minWidth: 40 }}>
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText 
                            primary={item.label} 
                            sx={{ 
                                color: activeTab === item.key ? "#c17f59" : "#faf8f5",
                                "& .MuiTypography-root": {
                                    fontWeight: activeTab === item.key ? 600 : 400,
                                }
                            }} 
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Sidebar;
