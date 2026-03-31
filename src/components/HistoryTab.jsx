import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Button,
    Chip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Tooltip,
    Divider,
    TextField,
} from "@mui/material";

import HistoryIcon from "@mui/icons-material/History";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import ReplyIcon from "@mui/icons-material/Reply";
import SearchIcon from "@mui/icons-material/Search";

function HistoryTab({ history, setHistory }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const clearAll = () => {
        localStorage.removeItem("history");
        setHistory([]);
    };

    const deleteOne = (index) => {
        const updated = history.filter((_, i) => i !== index);
        setHistory(updated);
        localStorage.setItem("history", JSON.stringify(updated));
        setDeleteDialogOpen(false);
    };

    const openDeleteDialog = (index) => {
        setItemToDelete(index);
        setDeleteDialogOpen(true);
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    // Get tone color
    const getToneColor = (tone) => {
        const colors = {
            "Professional": "#1565c0",
            "Friendly": "#2e7d32",
            "Casual": "#ef6c00",
            "Formal": "#6a1b9a",
            "Apologetic": "#c2185b",
            "Persuasive": "#00695c",
            "Follow-up": "#283593",
        };
        return colors[tone] || "#6b6560";
    };

    // Filter history based on search
    const filteredHistory = history.filter(item => 
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.reply.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box sx={{ position: "relative" }}>
            
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
                    <HistoryIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        History
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        View and manage your generated replies
                    </Typography>
                </Box>
                
                {history.length > 0 && (
                    <Button 
                        variant="outlined" 
                        onClick={clearAll}
                        sx={{ 
                            borderColor: "#c17f59",
                            color: "#c17f59",
                            textTransform: "none",
                            "&:hover": {
                                background: "rgba(193, 127, 89, 0.08)",
                                borderColor: "#b8734f",
                            }
                        }}
                        startIcon={<ClearAllIcon />}
                    >
                        Clear All
                    </Button>
                )}
            </Box>

            {/* Search Bar */}
            {history.length > 0 && (
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        mb: 3,
                        borderRadius: 3,
                        background: "#ffffff",
                        border: "1px solid #e8e4df",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <SearchIcon sx={{ color: "#6b6560" }} />
                    <TextField
                        fullWidth
                        placeholder="Search history..."
                        variant="standard"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                        }}
                    />
                </Paper>
            )}

            {/* Stats */}
            {history.length > 0 && (
                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Chip 
                        icon={<HistoryIcon />}
                        label={`${filteredHistory.length} entries`}
                        sx={{ 
                            background: "rgba(139, 154, 125, 0.1)",
                            color: "#8b9a7d",
                            fontWeight: 500,
                        }}
                    />
                    {searchTerm && (
                        <Chip 
                            label={`${history.length - filteredHistory.length} filtered out`}
                            onDelete={() => setSearchTerm("")}
                            sx={{ 
                                background: "#e8e4df",
                                color: "#6b6560",
                            }}
                        />
                    )}
                </Box>
            )}

            {/* Empty State */}
            {history.length === 0 ? (
                <Paper
                    elevation={0}
                    sx={{
                        p: 6,
                        borderRadius: 4,
                        background: "#faf8f5",
                        border: "2px dashed #e8e4df",
                        textAlign: "center",
                    }}
                >
                    <HistoryIcon sx={{ fontSize: 48, color: "#c17f59", mb: 2, opacity: 0.5 }} />
                    <Typography color="#2d2a26" fontWeight={600} variant="h6" mb={1}>
                        No history yet
                    </Typography>
                    <Typography color="#6b6560">
                        Generate your first reply to see it here
                    </Typography>
                </Paper>
            ) : filteredHistory.length === 0 ? (
                <Paper
                    elevation={0}
                    sx={{
                        p: 6,
                        borderRadius: 4,
                        background: "#faf8f5",
                        border: "1px dashed #e8e4df",
                        textAlign: "center",
                    }}
                >
                    <SearchIcon sx={{ fontSize: 48, color: "#6b6560", mb: 2, opacity: 0.5 }} />
                    <Typography color="#2d2a26" fontWeight={600} variant="h6" mb={1}>
                        No matches found
                    </Typography>
                    <Typography color="#6b6560">
                        Try adjusting your search
                    </Typography>
                </Paper>
            ) : (
                filteredHistory.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            p: 3,
                            mb: 3,
                            borderRadius: 4,
                            background: "#ffffff",
                            border: "1px solid #e8e4df",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                            }
                        }}
                    >
                        {/* Header */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                <Chip
                                    size="small"
                                    label={item.tone}
                                    sx={{
                                        background: `${getToneColor(item.tone)}15`,
                                        color: getToneColor(item.tone),
                                        fontWeight: 600,
                                        fontSize: 12,
                                    }}
                                />
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <AccessTimeIcon sx={{ fontSize: 14, color: "#6b6560" }} />
                                    <Typography color="#6b6560" fontSize={13}>
                                        {item.date}
                                    </Typography>
                                </Box>
                            </Box>
                            
                            <Tooltip title="Delete">
                                <IconButton 
                                    onClick={() => openDeleteDialog(index)}
                                    sx={{ 
                                        color: "#c17f59",
                                        "&:hover": {
                                            background: "rgba(193, 127, 89, 0.1)",
                                        }
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Divider sx={{ my: 2, borderColor: "#e8e4df" }} />

                        {/* Original Email */}
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                <EmailIcon sx={{ fontSize: 16, color: "#c17f59" }} />
                                <Typography fontWeight={600} color="#2d2a26" fontSize={14}>
                                    Original Email
                                </Typography>
                            </Box>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    background: "#faf8f5",
                                    border: "1px solid #e8e4df",
                                }}
                            >
                                <Typography color="#2d2a26" fontSize={14} sx={{ lineHeight: 1.6 }}>
                                    {item.email.length > 200 ? item.email.slice(0, 200) + "..." : item.email}
                                </Typography>
                            </Paper>
                        </Box>

                        {/* Generated Reply */}
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                <ReplyIcon sx={{ fontSize: 16, color: "#8b9a7d" }} />
                                <Typography fontWeight={600} color="#2d2a26" fontSize={14}>
                                    Generated Reply
                                </Typography>
                            </Box>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    background: "linear-gradient(145deg, #f5f1ec 0%, #faf8f5 100%)",
                                    border: "1px solid #e8e4df",
                                }}
                            >
                                <Typography color="#2d2a26" fontSize={14} sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
                                    {item.reply}
                                </Typography>
                            </Paper>
                        </Box>

                        {/* Actions */}
                        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                            <Button
                                variant="outlined"
                                onClick={() => copyText(item.reply)}
                                sx={{
                                    flex: 1,
                                    borderColor: "#c17f59",
                                    color: "#c17f59",
                                    textTransform: "none",
                                    py: 1,
                                    "&:hover": {
                                        background: "rgba(193, 127, 89, 0.08)",
                                        borderColor: "#b8734f",
                                    }
                                }}
                                startIcon={<ContentCopyIcon />}
                            >
                                Copy Reply
                            </Button>
                            
                            <Button
                                variant="outlined"
                                onClick={() => copyText(item.email)}
                                sx={{
                                    flex: 1,
                                    borderColor: "#8b9a7d",
                                    color: "#8b9a7d",
                                    textTransform: "none",
                                    py: 1,
                                    "&:hover": {
                                        background: "rgba(139, 154, 125, 0.08)",
                                        borderColor: "#7a8b6e",
                                    }
                                }}
                                startIcon={<ContentCopyIcon />}
                            >
                                Copy Original
                            </Button>
                        </Box>
                    </Paper>
                ))
            )}

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        background: "#faf8f5",
                    }
                }}
            >
                <DialogTitle sx={{ color: "#2d2a26", fontWeight: 600 }}>
                    Delete History Item?
                </DialogTitle>
                <DialogContent>
                    <Typography color="#6b6560">
                        Are you sure you want to delete this item? This action cannot be undone.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                        onClick={() => setDeleteDialogOpen(false)}
                        sx={{ 
                            color: "#6b6560",
                            textTransform: "none",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={() => deleteOne(itemToDelete)}
                        sx={{ 
                            background: "#c17f59",
                            color: "#fff",
                            textTransform: "none",
                            "&:hover": {
                                background: "#b8734f",
                            }
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default HistoryTab;
