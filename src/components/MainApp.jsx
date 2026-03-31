import React, { useState, useEffect, useMemo } from "react";
import {
    Box,
    Container,
    Typography,
    Drawer,
    CssBaseline,
} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GeneratorTab from "./GeneratorTab";
import DashboardTab from "./DashboardTab";
import HistoryTab from "./HistoryTab";
import ProfileTab from "./ProfileTab";

function MainApp({ setIsLoggedIn }) {

    const [activeTab, setActiveTab] = useState("generator");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [emailContent, setEmailContent] = useState("");
    const [instructions, setInstructions] = useState("");
    const [tone, setTone] = useState("Professional");
    const [generatedReply, setGeneratedReply] = useState("");
    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [user, setUser] = useState(null);

    // ENV SAFE URL
    const BASE_URL =
        import.meta.env.VITE_API_URL || "http://localhost:8080";

    const API_URL = `${BASE_URL}/api/email/generate`;

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

    // LOAD HISTORY
    useEffect(() => {
        const saved = localStorage.getItem("history");
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    // SAVE HISTORY
    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history]);

    const theme = useMemo(() =>
        createTheme({
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
        }), []
    );

    const handleSidebarClick = (key) => {
        if (key === "logout") {
            localStorage.removeItem("token");
            localStorage.removeItem("history");
            setIsLoggedIn(false);
        } else {
            setActiveTab(key);
        }
    };

    // GENERATE (FIXED)
    const handleGenerate = async () => {
        if (!emailContent.trim()) {
            setError("Email required");
            return;
        }

        setLoading(true);
        setError("");
        setGeneratedReply("");

        try {
            const token = localStorage.getItem("token");

            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: `Bearer ${token}` }), // SAFE
                },
                body: JSON.stringify({
                    emailContent,
                    instructions,
                    tone,
                }),
            });

            if (res.status === 401) {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                return;
            }

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Backend error");
            }

            const replyText = await res.text();
            setGeneratedReply(replyText);

            // SAVE HISTORY
            setHistory((prev) => [
                {
                    email: emailContent,
                    tone,
                    reply: replyText,
                    date: new Date().toLocaleString(),
                },
                ...prev,
            ]);

        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => navigator.clipboard.writeText(generatedReply);

    const handleDownload = () => {
        const blob = new Blob([generatedReply], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "email-reply.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ 
                display: "flex", 
                minHeight: "100vh", 
                pt: "64px",
                background: "linear-gradient(135deg, #faf8f5 0%, #f5f1ec 50%, #e8e4df 100%)",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Decorative background elements */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "10%",
                        right: "-5%",
                        width: 400,
                        height: 400,
                        background: "radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(60px)",
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-10%",
                        left: "-5%",
                        width: 300,
                        height: 300,
                        background: "radial-gradient(circle, rgba(139, 154, 125, 0.12) 0%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(50px)",
                        zIndex: 0,
                    }}
                />
                {/* NAVBAR */}
                <Navbar
                    user={user}
                    setIsLoggedIn={setIsLoggedIn}
                    onMenuClick={() => setDrawerOpen(true)}
                    onProfileClick={() => setActiveTab("profile")}
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
                        onTabClick={handleSidebarClick}
                        onClose={() => setDrawerOpen(false)}
                    />
                </Drawer>

                {/* CONTENT */}
                <Container sx={{ mt: 3, flex: 1, position: "relative", zIndex: 1 }}>
                    {activeTab === "generator" && (
                        <GeneratorTab
                            emailContent={emailContent}
                            setEmailContent={setEmailContent}
                            instructions={instructions}
                            setInstructions={setInstructions}
                            tone={tone}
                            setTone={setTone}
                            generatedReply={generatedReply}
                            loading={loading}
                            error={error}
                            onGenerate={handleGenerate}
                            onCopy={handleCopy}
                            onDownload={handleDownload}
                        />
                    )}

                    {activeTab === "dashboard" && (
                        <DashboardTab history={history} />
                    )}

                    {activeTab === "history" && (
                        <HistoryTab history={history} setHistory={setHistory} />
                    )}

                    {activeTab === "profile" && (
                        <ProfileTab />
                    )}
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default MainApp;