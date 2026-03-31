import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    Button,
    Divider,
} from "@mui/material";

import GavelIcon from "@mui/icons-material/Gavel";
import HomeIcon from "@mui/icons-material/Home";

function TermsPage() {
    return (
        <Box>
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: 3, 
                    background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <GavelIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Terms of Service
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        Rules and guidelines for using our service
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
                    1. Acceptance of Terms
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    By accessing or using EMIPI, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our service.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    2. Use of Service
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    You agree to use EMIPI only for lawful purposes and in accordance with these Terms. 
                    You are responsible for all content you generate and send using our service. 
                    Do not use the service to generate harmful, illegal, or inappropriate content.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    3. Account Registration
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    To use certain features, you must create an account. You are responsible for 
                    maintaining the confidentiality of your account credentials and for all activities 
                    that occur under your account.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    4. Intellectual Property
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    The content you generate using EMIPI belongs to you. However, we retain all rights 
                    to our platform, including our software, design, and branding. You may not copy, 
                    modify, or distribute our platform without permission.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    5. Limitation of Liability
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ mb: 3, lineHeight: 1.7 }}>
                    EMIPI is provided "as is" without warranties of any kind. We are not responsible 
                    for any damages arising from your use of the service. Always review AI-generated 
                    content before sending.
                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={2}>
                    6. Changes to Terms
                </Typography>
                <Typography color="#6b6560" fontSize={14} sx={{ lineHeight: 1.7 }}>
                    We may update these Terms from time to time. Continued use of the service after 
                    changes constitutes acceptance of the new Terms. For questions, please 
                    <Link to="/contact" style={{ color: "#c17f59", textDecoration: "none" }}> contact us</Link>.
                </Typography>
            </Paper>
        </Box>
    );
}

export default TermsPage;
