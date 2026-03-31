import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    Button,
    Divider,
} from "@mui/material";

import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import HomeIcon from "@mui/icons-material/Home";

function PrivacyPage() {
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
                    <PrivacyTipIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Privacy Policy
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        How we handle your data
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
                    1. Information We Collect
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us. This includes your email address, name, and any content 
                    you generate using our AI email assistant.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    2. How We Use Your Information
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    We use the information we collect to provide, maintain, and improve our services, 
                    to communicate with you, and to personalize your experience. Your email content 
                    is processed by our AI systems solely to generate replies.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    3. Data Security
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    We implement appropriate technical and organizational measures to protect your 
                    personal information against unauthorized access, alteration, or destruction. 
                    However, no method of transmission over the Internet is 100% secure.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    4. Your Rights
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    You have the right to access, update, or delete your personal information. 
                    You can also request a copy of your data or ask us to stop processing your information. 
                    Contact us to exercise these rights.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    5. Contact Us
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ lineHeight: 1.7 }}>
                    If you have any questions about this Privacy Policy, please contact us through 
                    our <Link to="/contact" style={{ color: "#c17f59", textDecoration: "none" }}>Contact page</Link>.
                </Typography>
            </Paper>
        </Box>
    );
}

export default PrivacyPage;
