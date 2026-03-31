import React from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Alert,
    Divider,
    CircularProgress,
    Chip,
    Tooltip,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmailIcon from "@mui/icons-material/Email";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";

function GeneratorTab({
    emailContent,
    setEmailContent,
    instructions,
    setInstructions,
    tone,
    setTone,
    generatedReply,
    loading,
    error,
    onGenerate,
    onCopy,
    onDownload,
}) {
    return (
        <Box sx={{ position: "relative" }}>

            {/* BACKGROUND GLOW - Warm earth tone */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-100px",
                    left: "-100px",
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(193, 127, 89, 0.3) 0%, transparent 70%)",
                    filter: "blur(120px)",
                    opacity: 0.3,
                    zIndex: 0,
                }}
            />

            {/* EMIPI WATERMARK */}
            <Typography
                sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 20,
                    fontSize: 80,
                    fontWeight: 900,
                    opacity: 0.05,
                    pointerEvents: "none",
                    userSelect: "none",
                }}
            >
                EMIPI
            </Typography>

            <Grid container spacing={3} sx={{ position: "relative", zIndex: 1 }}>

                {/* LEFT PANEL */}
                <Grid item xs={12} md={7}>
                    <div>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                                border: "1px solid #e8e4df",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            {/* Header */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                                <Box sx={{ 
                                    width: 48, 
                                    height: 48, 
                                    borderRadius: 3, 
                                    background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <AutoAwesomeIcon sx={{ color: "#fff", fontSize: 24 }} />
                                </Box>
                                <Box>
                                    <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                        Email Generator
                                    </Typography>
                                    <Typography color="#6b6560" fontSize={14}>
                                        AI-powered reply generator
                                    </Typography>
                                </Box>
                            </Box>

                            {error && (
                                <Alert 
                                    severity="error" 
                                    sx={{ 
                                        mb: 3, 
                                        borderRadius: 2,
                                        background: "rgba(211, 47, 47, 0.08)",
                                        border: "1px solid rgba(211, 47, 47, 0.2)",
                                    }}
                                >
                                    {error}
                                </Alert>
                            )}

                            <TextField
                                fullWidth
                                label="Original Email"
                                placeholder="Paste the email you received here..."
                                multiline
                                rows={5}
                                value={emailContent}
                                onChange={(e) => setEmailContent(e.target.value)}
                                sx={{ mb: 3 }}
                                InputProps={{
                                    startAdornment: (
                                        <EmailIcon sx={{ color: "#c17f59", mr: 1, mt: 1 }} />
                                    ),
                                    style: { color: "#2d2a26", padding: "12px" },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Instructions (Optional)"
                                placeholder="Any specific instructions for the reply..."
                                multiline
                                rows={3}
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                sx={{ mb: 3 }}
                                InputProps={{
                                    startAdornment: (
                                        <EditNoteIcon sx={{ color: "#8b9a7d", mr: 1, mt: 1 }} />
                                    ),
                                    style: { color: "#2d2a26", padding: "12px" },
                                }}
                            />

                            <FormControl fullWidth sx={{ mb: 4 }}>
                                <InputLabel sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <PsychologyIcon sx={{ fontSize: 18, color: "#c17f59" }} />
                                    Tone
                                </InputLabel>
                                <Select
                                    value={tone}
                                    label="Tone"
                                    onChange={(e) => setTone(e.target.value)}
                                    sx={{ borderRadius: 2 }}
                                >
                                    <MenuItem value="Professional">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#e3f2fd", color: "#1565c0", fontSize: 12 }}>Work</Chip>
                                            Professional
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Friendly">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#e8f5e9", color: "#2e7d32", fontSize: 12 }}>Casual</Chip>
                                            Friendly
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Casual">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#fff3e0", color: "#ef6c00", fontSize: 12 }}>Relaxed</Chip>
                                            Casual
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Formal">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#f3e5f5", color: "#6a1b9a", fontSize: 12 }}>Official</Chip>
                                            Formal
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Apologetic">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#fce4ec", color: "#c2185b", fontSize: 12 }}>Sorry</Chip>
                                            Apologetic
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Persuasive">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#e0f2f1", color: "#00695c", fontSize: 12 }}>Convince</Chip>
                                            Persuasive
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Follow-up">
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Chip size="small" sx={{ background: "#e8eaf6", color: "#283593", fontSize: 12 }}>Reminder</Chip>
                                            Follow-up
                                        </Box>
                                    </MenuItem>
                                </Select>
                            </FormControl>

                            <Button
                                fullWidth
                                onClick={onGenerate}
                                disabled={loading}
                                sx={{
                                    height: 56,
                                    borderRadius: 3,
                                    color: "#fff",
                                    fontWeight: 600,
                                    background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)",
                                    textTransform: "none",
                                    fontSize: "17px",
                                    boxShadow: "0 4px 20px rgba(193, 127, 89, 0.35)",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #b8734f 0%, #c17f59 100%)",
                                        boxShadow: "0 6px 24px rgba(193, 127, 89, 0.45)",
                                        transform: "translateY(-1px)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {loading ? (
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <CircularProgress size={20} sx={{ color: "#fff" }} />
                                        <Typography>Generating...</Typography>
                                    </Box>
                                ) : (
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <AutoAwesomeIcon />
                                        <Typography fontWeight={600}>Generate Reply</Typography>
                                    </Box>
                                )}
                            </Button>

                            {generatedReply && (
                                <div>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            mt: 4,
                                            p: 4,
                                            background: "linear-gradient(145deg, #ffffff 0%, #faf8f5 100%)",
                                            border: "1px solid #e8e4df",
                                            borderRadius: 4,
                                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                                        }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                                            <Box sx={{ 
                                                width: 40, 
                                                height: 40, 
                                                borderRadius: 2, 
                                                background: "#8b9a7d",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}>
                                                <CheckCircleIcon sx={{ color: "#fff" }} />
                                            </Box>
                                            <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                                Generated Reply
                                            </Typography>
                                        </Box>

                                        <Box 
                                            sx={{ 
                                                background: "#fff", 
                                                p: 3, 
                                                borderRadius: 2,
                                                border: "1px solid #e8e4df",
                                                mb: 3,
                                            }}
                                        >
                                            <Typography sx={{ whiteSpace: "pre-line", color: "#2d2a26", lineHeight: 1.8, fontSize: 15 }}>
                                                {generatedReply}
                                            </Typography>
                                        </Box>

                                        <Divider sx={{ my: 3, borderColor: "#e8e4df" }} />

                                        <Box sx={{ display: "flex", gap: 2 }}>
                                            <Tooltip title="Copy to clipboard">
                                                <Button 
                                                    onClick={onCopy}
                                                    variant="outlined"
                                                    sx={{ 
                                                        flex: 1,
                                                        borderColor: "#c17f59", 
                                                        color: "#c17f59",
                                                        textTransform: "none",
                                                        py: 1.5,
                                                        "&:hover": {
                                                            borderColor: "#b8734f",
                                                            background: "rgba(193, 127, 89, 0.08)",
                                                        }
                                                    }}
                                                >
                                                    <ContentCopyIcon sx={{ mr: 1, fontSize: 18 }} />
                                                    Copy
                                                </Button>
                                            </Tooltip>
                                            <Tooltip title="Download as text file">
                                                <Button 
                                                    onClick={onDownload}
                                                    variant="outlined"
                                                    sx={{ 
                                                        flex: 1,
                                                        borderColor: "#8b9a7d", 
                                                        color: "#8b9a7d",
                                                        textTransform: "none",
                                                        py: 1.5,
                                                        "&:hover": {
                                                            borderColor: "#7a8b6e",
                                                            background: "rgba(139, 154, 125, 0.08)",
                                                        }
                                                    }}
                                                >
                                                    <DownloadIcon sx={{ mr: 1, fontSize: 18 }} />
                                                    Download
                                                </Button>
                                            </Tooltip>
                                        </Box>
                                    </Paper>
                                </div>
                            )}
                        </Paper>
                    </div>
                </Grid>

                {/* RIGHT PANEL */}
                <Grid item xs={12} md={5}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {/* How it Works */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                background: "#ffffff",
                                border: "1px solid #e8e4df",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                <InfoIcon sx={{ color: "#c17f59" }} />
                                <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                    How EMIPI Works
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 2, borderColor: "#e8e4df" }} />

                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box sx={{ 
                                        width: 32, 
                                        height: 32, 
                                        borderRadius: 2, 
                                        background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        color: "#fff", 
                                        fontSize: 14, 
                                        fontWeight: 600 
                                    }}>
                                        <EmailIcon sx={{ fontSize: 18 }} />
                                    </Box>
                                    <Box>
                                        <Typography color="#2d2a26" fontWeight={500}>Paste email content</Typography>
                                        <Typography color="#6b6560" fontSize={13}>Copy and paste the email you received</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box sx={{ 
                                        width: 32, 
                                        height: 32, 
                                        borderRadius: 2, 
                                        background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        color: "#fff", 
                                        fontSize: 14, 
                                        fontWeight: 600 
                                    }}>
                                        <EditNoteIcon sx={{ fontSize: 18 }} />
                                    </Box>
                                    <Box>
                                        <Typography color="#2d2a26" fontWeight={500}>Add instructions</Typography>
                                        <Typography color="#6b6560" fontSize={13}>Specify what you want in the reply</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box sx={{ 
                                        width: 32, 
                                        height: 32, 
                                        borderRadius: 2, 
                                        background: "linear-gradient(135deg, #c17f59 0%, #d49a7a 100%)", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        color: "#fff", 
                                        fontSize: 14, 
                                        fontWeight: 600 
                                    }}>
                                        <PsychologyIcon sx={{ fontSize: 18 }} />
                                    </Box>
                                    <Box>
                                        <Typography color="#2d2a26" fontWeight={500}>Choose tone</Typography>
                                        <Typography color="#6b6560" fontSize={13}>Select the appropriate tone</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box sx={{ 
                                        width: 32, 
                                        height: 32, 
                                        borderRadius: 2, 
                                        background: "linear-gradient(135deg, #8b9a7d 0%, #a8b899 100%)", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        color: "#fff", 
                                        fontSize: 14, 
                                        fontWeight: 600 
                                    }}>
                                        <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                                    </Box>
                                    <Box>
                                        <Typography color="#2d2a26" fontWeight={500}>Generate reply</Typography>
                                        <Typography color="#6b6560" fontSize={13}>Get AI-generated reply instantly</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>

                        {/* Tips Card */}
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
                                Pro Tips
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                                <Typography color="#6b6560" fontSize={14}>
                                    • Be specific in instructions
                                </Typography>
                                <Typography color="#6b6560" fontSize={14}>
                                    • Choose tone based on recipient
                                </Typography>
                                <Typography color="#6b6560" fontSize={14}>
                                    • Review before sending
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GeneratorTab;