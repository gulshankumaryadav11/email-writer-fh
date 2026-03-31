import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    Grid,
    Chip,
    Button,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";
import HomeIcon from "@mui/icons-material/Home";

const milestones = [
    { year: "2024", event: "Idea Born", desc: "Conceptualized to help professionals communicate better" },
    { year: "2024", event: "Development Started", desc: "Building the AI-powered email assistant" },
    { year: "2025", event: "Beta Testing", desc: "Early users provided valuable feedback" },
    { year: "2026", event: "Official Launch", desc: "Available for everyone to use" },
];

function AboutPage() {
    return (
        <Box>
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: 3, 
                    background: "linear-gradient(135deg, #8b9a7d 0%, #a8b899 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <InfoIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        About Us
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        Our story, mission, and the team behind EMIPI
                    </Typography>
                </Box>
                <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    sx={{
                        borderColor: "#8b9a7d",
                        color: "#8b9a7d",
                        textTransform: "none",
                        "&:hover": {
                            background: "rgba(139, 154, 125, 0.08)",
                            borderColor: "#7a8b6e",
                        }
                    }}
                >
                    Home
                </Button>
            </Box>

            {/* Mission Section */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: 4,
                    background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                    border: "1px solid #e8e4df",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
            >
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h4" mb={2}>
                        Our Mission
                    </Typography>
                    <Typography color="#6b6560" fontSize={16} sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.7 }}>
                        We believe email should be a tool for connection, not a source of stress. 
                        EMIPI was built to help professionals communicate more effectively, 
                        saving time while maintaining the human touch in every message.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: "center", p: 2 }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                borderRadius: "50%", 
                                background: "rgba(193, 127, 89, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: "auto",
                                mb: 2,
                            }}>
                                <LightbulbIcon sx={{ color: "#c17f59", fontSize: 28 }} />
                            </Box>
                            <Typography fontWeight={600} color="#2d2a26" mb={1}>
                                Innovation First
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Leveraging cutting-edge AI to transform how people write emails
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: "center", p: 2 }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                borderRadius: "50%", 
                                background: "rgba(139, 154, 125, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: "auto",
                                mb: 2,
                            }}>
                                <GroupsIcon sx={{ color: "#8b9a7d", fontSize: 28 }} />
                            </Box>
                            <Typography fontWeight={600} color="#2d2a26" mb={1}>
                                User-Centered
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Every feature is designed with our users' needs in mind
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: "center", p: 2 }}>
                            <Box sx={{ 
                                width: 60, 
                                height: 60, 
                                borderRadius: "50%", 
                                background: "rgba(212, 165, 116, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: "auto",
                                mb: 2,
                            }}>
                                <SecurityIcon sx={{ color: "#d49a7a", fontSize: 28 }} />
                            </Box>
                            <Typography fontWeight={600} color="#2d2a26" mb={1}>
                                Trust & Security
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Your data is protected with enterprise-grade security
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Stats Section */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    mb: 4,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                    color: "#fff",
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={6} md={3}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h3" fontWeight={700} mb={1}>
                                ∞
                            </Typography>
                            <Typography fontSize={14} sx={{ opacity: 0.9 }}>
                                Unlimited Replies
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h3" fontWeight={700} mb={1}>
                                7+
                            </Typography>
                            <Typography fontSize={14} sx={{ opacity: 0.9 }}>
                                Tone Options
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h3" fontWeight={700} mb={1}>
                                24/7
                            </Typography>
                            <Typography fontSize={14} sx={{ opacity: 0.9 }}>
                                AI Available
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h3" fontWeight={700} mb={1}>
                                100%
                            </Typography>
                            <Typography fontSize={14} sx={{ opacity: 0.9 }}>
                                Secure
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Coming Soon Section */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    background: "linear-gradient(145deg, #f5f1ec 0%, #faf8f5 100%)",
                    border: "1px solid #e8e4df",
                    textAlign: "center",
                }}
            >
                <GroupsIcon sx={{ fontSize: 48, color: "#8b9a7d", mb: 2 }} />
                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={1}>
                    Team Section Coming Soon
                </Typography>
                <Typography color="#6b6560" fontSize={14}>
                    We're a growing team passionate about AI and productivity tools.
                </Typography>
            </Paper>

            {/* Features Highlight */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    mt: 4,
                    borderRadius: 4,
                    background: "#ffffff",
                    border: "1px solid #e8e4df",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
            >
                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={3} textAlign="center">
                    Why Professionals Choose EMIPI
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
                            <SpeedIcon sx={{ color: "#c17f59", fontSize: 28 }} />
                            <Box>
                                <Typography fontWeight={600} color="#2d2a26">
                                    10× Faster Writing
                                </Typography>
                                <Typography color="#6b6560" fontSize={13}>
                                    Generate professional replies in seconds
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
                            <AutoAwesomeIcon sx={{ color: "#8b9a7d", fontSize: 28 }} />
                            <Box>
                                <Typography fontWeight={600} color="#2d2a26">
                                    AI-Powered Intelligence
                                </Typography>
                                <Typography color="#6b6560" fontSize={13}>
                                    Context-aware responses that understand intent
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
                            <VerifiedIcon sx={{ color: "#d49a7a", fontSize: 28 }} />
                            <Box>
                                <Typography fontWeight={600} color="#2d2a26">
                                    Professional Quality
                                </Typography>
                                <Typography color="#6b6560" fontSize={13}>
                                    Every reply polished and ready to send
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
                            <SecurityIcon sx={{ color: "#a8b899", fontSize: 28 }} />
                            <Box>
                                <Typography fontWeight={600} color="#2d2a26">
                                    Bank-Level Security
                                </Typography>
                                <Typography color="#6b6560" fontSize={13}>
                                    Your data is always protected
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default AboutPage;
