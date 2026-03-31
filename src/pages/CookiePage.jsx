import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    Button,
    Divider,
} from "@mui/material";

import CookieIcon from "@mui/icons-material/Cookie";
import HomeIcon from "@mui/icons-material/Home";

function CookiePage() {
    return (
        <Box>
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: 3, 
                    background: "linear-gradient(135deg, #d49a7a 0%, #c17f59 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <CookieIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Cookie Policy
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        How we use cookies
                    </Typography>
                </Box>
                <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    sx={{
                        borderColor: "#c17f59",
                        color: "#c17f59",
                        textTransform: "none",
                        "&:hover": {
                            background: "rgba(193, 127, 89, 0.08)",
                            borderColor: "#b8734f",
                        }
                    }}
                >
                    Home
                </Button>
            </Box>

            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    background: "#ffffff",
                    border: "1px solid #e8e4df",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
            >
                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    1. What Are Cookies
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help websites remember your preferences and improve your browsing experience.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    2. How We Use Cookies
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    We use cookies to:
                    <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                        <li>Keep you logged in to your account</li>
                        <li>Remember your preferences and settings</li>
                        <li>Understand how you use our service</li>
                        <li>Improve our website functionality</li>
                    </ul>
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    3. Types of Cookies We Use
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    <strong>Essential Cookies:</strong> Required for the website to function properly. 
                    These cannot be disabled.<br /><br />
                    <strong>Preference Cookies:</strong> Remember your settings and choices.<br /><br />
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    4. Managing Cookies
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    You can control cookies through your browser settings. Most browsers allow you to 
                    refuse or delete cookies. However, disabling cookies may affect the functionality 
                    of our service.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    5. Contact Us
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ lineHeight: 1.7 }}>
                    If you have questions about our Cookie Policy, please contact us through our 
                    <Link to="/contact" style={{ color: "#c17f59", textDecoration: "none" }}> Contact page</Link>.
                </Typography>
            </Paper>
        </Box>
    );
}

export default CookiePage;
