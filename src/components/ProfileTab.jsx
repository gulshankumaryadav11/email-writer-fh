import React, { useEffect, useState } from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Avatar,
    Chip,
    Divider,
    Grid,
    Tooltip,
    Alert,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function ProfileTab() {

    const [user, setUser] = useState({
        fullName: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [message, setMessage] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    // FETCH PROFILE
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
                const API_URL = `${BASE_URL}/api/user`;

                const res = await fetch(`${API_URL}/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();

                if (!res.ok) throw new Error(data.message);

                setUser({
                    fullName: data.fullName || "",
                    email: data.email || "",
                });

            } catch (err) {
                setMessage(err.message || "Failed to load profile");
            } finally {
                setFetching(false);
            }
        };

        fetchProfile();
    }, []);

    // UPDATE PROFILE
    const handleUpdate = async () => {
        setLoading(true);
        setMessage("");

        try {
            const token = localStorage.getItem("token");
            const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
            const API_URL = `${BASE_URL}/api/user`;

            const res = await fetch(`${API_URL}/update`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(user),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setMessage("Profile updated successfully!");
            setIsEditing(false);

        } catch (err) {
            setMessage(err.message || "Update failed");
        } finally {
            setLoading(false);
        }
    };

    // Get initials from name
    const getInitials = (name) => {
        return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '?';
    };

    // Get join date from token
    const getJoinDate = () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (payload.iat) {
                    return new Date(payload.iat * 1000).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                    });
                }
            }
            return 'Unknown';
        } catch {
            return 'Unknown';
        }
    };

    // LOADING SCREEN
    if (fetching) {
        return (
            <Box display="flex" justifyContent="center" mt={5}>
                <CircularProgress sx={{ color: "#c17f59" }} />
            </Box>
        );
    }

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
                    <PersonIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Profile
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        Manage your account settings
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={3}>
                {/* Left Panel - Profile Card */}
                <Grid item xs={12} md={5}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                            border: "1px solid #e8e4df",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                            textAlign: "center",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 100,
                                height: 100,
                                mx: "auto",
                                mb: 2,
                                bgcolor: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                                background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                                color: "#fff",
                                fontSize: 36,
                                fontWeight: 600,
                                border: "4px solid #fff",
                                boxShadow: "0 4px 16px rgba(193, 127, 89, 0.3)",
                            }}
                        >
                            {getInitials(user.fullName)}
                        </Avatar>

                        <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={0.5}>
                            {user.fullName || "User"}
                        </Typography>
                        
                        <Typography color="#6b6560" fontSize={14} mb={2}>
                            {user.email}
                        </Typography>

                        <Chip
                            icon={<BadgeIcon />}
                            label="PRO Member"
                            sx={{
                                background: "rgba(193, 127, 89, 0.1)",
                                color: "#c17f59",
                                fontWeight: 600,
                                mb: 2,
                            }}
                        />

                        <Divider sx={{ my: 2, borderColor: "#e8e4df" }} />

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                            <CalendarTodayIcon sx={{ fontSize: 16, color: "#6b6560" }} />
                            <Typography color="#6b6560" fontSize={13}>
                                Member since {getJoinDate()}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Panel - Edit Form */}
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
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <EditIcon sx={{ color: "#c17f59" }} />
                                <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                    Profile Settings
                                </Typography>
                            </Box>
                            
                            {!isEditing && (
                                <Button
                                    variant="outlined"
                                    onClick={() => setIsEditing(true)}
                                    sx={{
                                        borderColor: "#c17f59",
                                        color: "#c17f59",
                                        textTransform: "none",
                                        "&:hover": {
                                            background: "rgba(193, 127, 89, 0.08)",
                                        }
                                    }}
                                    startIcon={<EditIcon />}
                                >
                                    Edit
                                </Button>
                            )}
                        </Box>

                        {message && (
                            <Alert 
                                severity={message.includes("success") ? "success" : "error"}
                                sx={{ 
                                    mb: 3, 
                                    borderRadius: 2,
                                    background: message.includes("success") ? "rgba(139, 154, 125, 0.1)" : "rgba(211, 47, 47, 0.08)",
                                }}
                            >
                                {message}
                            </Alert>
                        )}

                        <TextField
                            fullWidth
                            label="Full Name"
                            value={user.fullName}
                            onChange={(e) =>
                                setUser({ ...user, fullName: e.target.value })
                            }
                            disabled={!isEditing}
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
                            label="Email"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            disabled={!isEditing}
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

                        {isEditing && (
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setMessage("");
                                    }}
                                    sx={{
                                        flex: 1,
                                        borderColor: "#6b6560",
                                        color: "#6b6560",
                                        textTransform: "none",
                                        py: 1.5,
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleUpdate}
                                    disabled={loading}
                                    sx={{
                                        flex: 1,
                                        height: 48,
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
                                    startIcon={loading ? <CircularProgress size={18} sx={{ color: "#fff" }} /> : <SaveIcon />}
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </Button>
                            </Box>
                        )}
                    </Paper>

                    {/* Account Stats Card */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            mt: 3,
                            borderRadius: 4,
                            background: "linear-gradient(145deg, #f5f1ec 0%, #faf8f5 100%)",
                            border: "1px solid #e8e4df",
                        }}
                    >
                        <Typography fontWeight={600} color="#2d2a26" mb={2}>
                            Account Stats
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{ textAlign: "center", p: 2 }}>
                                    <Typography variant="h4" fontWeight={700} color="#c17f59">
                                        {localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")).length : 0}
                                    </Typography>
                                    <Typography color="#6b6560" fontSize={13}>
                                        Total Replies
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ textAlign: "center", p: 2 }}>
                                    <Typography variant="h4" fontWeight={700} color="#8b9a7d">
                                        {user.email ? user.email.split('@')[1].split('.')[0].charAt(0).toUpperCase() + user.email.split('@')[1].split('.')[0].slice(1) : 'Free'}
                                    </Typography>
                                    <Typography color="#6b6560" fontSize={13}>
                                        Plan Type
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProfileTab;
