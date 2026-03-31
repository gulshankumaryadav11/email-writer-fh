import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Grid,
    Alert,
    Chip,
} from "@mui/material";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
    };

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

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
                    <ContactMailIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Contact Us
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        Get in touch with our team
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

            <Grid container spacing={3}>
                {/* Contact Info Cards */}
                <Grid item xs={12} md={5}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {/* Email Card */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                                border: "1px solid #e8e4df",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                <Box sx={{ 
                                    width: 40, 
                                    height: 40, 
                                    borderRadius: 2, 
                                    background: "rgba(193, 127, 89, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <EmailIcon sx={{ color: "#c17f59" }} />
                                </Box>
                                <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                    Email
                                </Typography>
                            </Box>
                            <Typography color="#6b6560" fontSize={14}>
                                support@emipi.com
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                hello@emipi.com
                            </Typography>
                        </Paper>

                        {/* Phone Card */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                                border: "1px solid #e8e4df",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                <Box sx={{ 
                                    width: 40, 
                                    height: 40, 
                                    borderRadius: 2, 
                                    background: "rgba(139, 154, 125, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <PhoneIcon sx={{ color: "#8b9a7d" }} />
                                </Box>
                                <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                    Phone
                                </Typography>
                            </Box>
                            <Typography color="#6b6560" fontSize={14}>
                                +1 (555) 123-4567
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Mon-Fri, 9am-6pm EST
                            </Typography>
                        </Paper>

                        {/* Hours Card */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                                border: "1px solid #e8e4df",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                <Box sx={{ 
                                    width: 40, 
                                    height: 40, 
                                    borderRadius: 2, 
                                    background: "rgba(212, 165, 116, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <AccessTimeIcon sx={{ color: "#d49a7a" }} />
                                </Box>
                                <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                    Business Hours
                                </Typography>
                            </Box>
                            <Typography color="#6b6560" fontSize={14}>
                                Monday - Friday: 9:00 AM - 6:00 PM
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Saturday: 10:00 AM - 4:00 PM
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Sunday: Closed
                            </Typography>
                        </Paper>

                        {/* FAQ Chips */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                background: "linear-gradient(145deg, #f5f1ec 0%, #faf8f5 100%)",
                                border: "1px solid #e8e4df",
                            }}
                        >
                            <Typography fontWeight={600} color="#2d2a26" mb={2}>
                                Common Topics
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                <Chip label="Account Help" size="small" sx={{ background: "rgba(193, 127, 89, 0.1)", color: "#c17f59" }} />
                                <Chip label="Billing" size="small" sx={{ background: "rgba(139, 154, 125, 0.1)", color: "#8b9a7d" }} />
                                <Chip label="Features" size="small" sx={{ background: "rgba(212, 165, 116, 0.1)", color: "#d49a7a" }} />
                                <Chip label="Bug Report" size="small" sx={{ background: "rgba(107, 101, 96, 0.1)", color: "#6b6560" }} />
                            </Box>
                        </Paper>
                    </Box>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={7}>
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
                        <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={3}>
                            Send us a Message
                        </Typography>

                        {submitted ? (
                            <Alert 
                                severity="success"
                                sx={{ 
                                    borderRadius: 2,
                                    background: "rgba(139, 154, 125, 0.1)",
                                }}
                            >
                                <Typography fontWeight={600} color="#2d2a26">
                                    Thank you for your message!
                                </Typography>
                                <Typography color="#6b6560" fontSize={14}>
                                    We'll get back to you within 24 hours.
                                </Typography>
                            </Alert>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    value={formData.name}
                                    onChange={handleChange("name")}
                                    required
                                    sx={{ 
                                        mb: 3,
                                        "& .MuiInputLabel-root": { color: "#6b6560" },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { borderColor: "#e8e4df" },
                                            "&:hover fieldset": { borderColor: "#c17f59" },
                                            "&.Mui-focused fieldset": { borderColor: "#c17f59" },
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon sx={{ color: "#c17f59", mr: 1 }} />
                                        ),
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange("email")}
                                    required
                                    sx={{ 
                                        mb: 3,
                                        "& .MuiInputLabel-root": { color: "#6b6560" },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { borderColor: "#e8e4df" },
                                            "&:hover fieldset": { borderColor: "#c17f59" },
                                            "&.Mui-focused fieldset": { borderColor: "#c17f59" },
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <EmailIcon sx={{ color: "#8b9a7d", mr: 1 }} />
                                        ),
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    label="Subject"
                                    value={formData.subject}
                                    onChange={handleChange("subject")}
                                    required
                                    sx={{ 
                                        mb: 3,
                                        "& .MuiInputLabel-root": { color: "#6b6560" },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { borderColor: "#e8e4df" },
                                            "&:hover fieldset": { borderColor: "#c17f59" },
                                            "&.Mui-focused fieldset": { borderColor: "#c17f59" },
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <SubjectIcon sx={{ color: "#d49a7a", mr: 1 }} />
                                        ),
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    label="Message"
                                    multiline
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange("message")}
                                    required
                                    sx={{ 
                                        mb: 3,
                                        "& .MuiInputLabel-root": { color: "#6b6560" },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { borderColor: "#e8e4df" },
                                            "&:hover fieldset": { borderColor: "#c17f59" },
                                            "&.Mui-focused fieldset": { borderColor: "#c17f59" },
                                        }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <MessageIcon sx={{ color: "#6b6560", mr: 1, mt: 1 }} />
                                        ),
                                    }}
                                />

                                <Button
                                    fullWidth
                                    type="submit"
                                    disabled={loading}
                                    sx={{
                                        height: 50,
                                        borderRadius: 3,
                                        background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                                        textTransform: "none",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        boxShadow: "0 4px 16px rgba(193, 127, 89, 0.3)",
                                        "&:hover": {
                                            background: "linear-gradient(135deg, #b8734f 0%, #c17f59 100%)",
                                            boxShadow: "0 6px 20px rgba(193, 127, 89, 0.4)",
                                        }
                                    }}
                                    startIcon={<SendIcon />}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactPage;
