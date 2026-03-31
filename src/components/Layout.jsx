import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
    Box,
    Container,
    Drawer,
    CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ setIsLoggedIn }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    
    // Get active tab from current path
    const activeTab = location.pathname.replace('/', '') || 'generator';

    // USER LOAD
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = JSON.parse(atob(token.split(".")[1]));
                const email = decoded.sub || decoded.email;

                if (email) {
                    setUser({
                        email,
                        name: email.split("@")[0],
                    });
                }
            } catch {
                // Invalid token - handled silently
            }
        }
    }, []);

    const theme = createTheme({
        palette: {
            mode: "light",
            background: { default: "#faf8f5", paper: "#ffffff" },
            primary: { main: "#c17f59", light: "#d49a7a", dark: "#b8734f" },
            secondary: { main: "#8b9a7d", light: "#a8b899" },
            text: { primary: "#2d2a26", secondary: "#6b6560" },
        },
        typography: {
            fontFamily: "'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        },
    });

    const handleSidebarClick = (key) => {
        if (key === "logout") {
            localStorage.removeItem("token");
            localStorage.removeItem("history");
            setIsLoggedIn(false);
        }
        // Navigation is handled by the Sidebar Link components
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100vh", pt: "64px" }}>
                {/* NAVBAR */}
                <Navbar
                    user={user}
                    setIsLoggedIn={setIsLoggedIn}
                    onMenuClick={() => setDrawerOpen(true)}
                />

                {/* SIDEBAR */}
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    sx={{
                        "& .MuiDrawer-paper": {
                            width: 280,
                            boxSizing: "border-box",
                            background: "#2d2a26",
                            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                        },
                    }}
                >
                    <Sidebar
                        activeTab={activeTab}
                        onClose={() => setDrawerOpen(false)}
                    />
                </Drawer>

                {/* CONTENT - Renders the child route */}
                <Container sx={{ mt: 3, flex: 1 }}>
                    <Outlet />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Layout;
