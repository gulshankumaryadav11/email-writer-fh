import React from "react";
import {
    Grid,
    Paper,
    Typography,
    Box,
    LinearProgress,
    Chip,
    Avatar,
} from "@mui/material";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
} from "recharts";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmailIcon from "@mui/icons-material/Email";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function DashboardTab({ history }) {

    const total = history.length;
    const lastTone = history[0]?.tone || "—";

    // WEEKLY DATA
    const getWeeklyData = () => {
        const map = {};
        history.forEach((item) => {
            const day = new Date(item.date).toLocaleDateString("en-US", { weekday: "short" });
            map[day] = (map[day] || 0) + 1;
        });
        return Object.keys(map).map((key) => ({
            day: key,
            count: map[key],
        }));
    };

    // TONE DATA
    const getToneData = () => {
        const map = {};
        history.forEach((item) => {
            map[item.tone] = (map[item.tone] || 0) + 1;
        });
        return Object.keys(map).map((key) => ({
            name: key,
            value: map[key],
        }));
    };

    const weeklyData = getWeeklyData();
    const toneData = getToneData();

    // AI USAGE SCORE (max 100)
    const usageScore = Math.min(total * 10, 100);

    // PRODUCTIVITY (based on usage)
    const productivity = Math.min(total * 8, 100);

    // Warm earth tone colors
    const COLORS = ["#c17f59", "#8b9a7d", "#d49a7a", "#a8b899", "#b8734f", "#7a8b6e"];

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

    return (
        <Box sx={{ position: "relative" }}>
            
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
                    <TrendingUpIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Dashboard
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        Track your email productivity
                    </Typography>
                </Box>
            </Box>

            {/* TOP STATS CARDS */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
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
                            <Avatar sx={{ bgcolor: "rgba(193, 127, 89, 0.1)", color: "#c17f59" }}>
                                <EmailIcon />
                            </Avatar>
                            <Typography color="#6b6560" fontSize={14}>
                                Total Replies
                            </Typography>
                        </Box>
                        <Typography variant="h3" fontWeight={700} color="#2d2a26">
                            {total}
                        </Typography>
                        <Typography color="#6b6560" fontSize={13} mt={1}>
                            Emails generated
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
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
                            <Avatar sx={{ bgcolor: "rgba(139, 154, 125, 0.1)", color: "#8b9a7d" }}>
                                <PsychologyIcon />
                            </Avatar>
                            <Typography color="#6b6560" fontSize={14}>
                                Last Tone Used
                            </Typography>
                        </Box>
                        <Typography variant="h5" fontWeight={700} color="#2d2a26">
                            {lastTone}
                        </Typography>
                        <Chip 
                            size="small" 
                            label={lastTone !== "—" ? "Active" : "No data"}
                            sx={{ 
                                mt: 1, 
                                background: lastTone !== "—" ? "rgba(139, 154, 125, 0.1)" : "#e8e4df",
                                color: lastTone !== "—" ? "#8b9a7d" : "#6b6560",
                                fontWeight: 500,
                            }}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
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
                            <Avatar sx={{ bgcolor: "rgba(193, 127, 89, 0.1)", color: "#c17f59" }}>
                                <AutoAwesomeIcon />
                            </Avatar>
                            <Typography color="#6b6560" fontSize={14}>
                                AI Usage Score
                            </Typography>
                        </Box>
                        <Typography variant="h3" fontWeight={700} color="#2d2a26">
                            {usageScore}%
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={usageScore}
                            sx={{
                                height: 8,
                                borderRadius: 4,
                                mt: 1,
                                backgroundColor: "#e8e4df",
                                "& .MuiLinearProgress-bar": {
                                    backgroundColor: "#c17f59",
                                    borderRadius: 4,
                                }
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>

            {/* PRODUCTIVITY METER */}
            <Box mt={4}>
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
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <TrendingUpIcon sx={{ color: "#c17f59" }} />
                            <Typography fontWeight={600} color="#2d2a26" variant="h6">
                                Productivity Meter
                            </Typography>
                        </Box>
                        <Typography fontWeight={700} color="#c17f59" variant="h5">
                            {productivity}%
                        </Typography>
                    </Box>

                    <LinearProgress
                        variant="determinate"
                        value={productivity}
                        sx={{
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: "#e8e4df",
                            "& .MuiLinearProgress-bar": {
                                background: "linear-gradient(90deg, #c17f59 0%, #d49a7a 100%)",
                                borderRadius: 6,
                            }
                        }}
                    />

                    <Typography color="#6b6560" fontSize={14} mt={2}>
                        {productivity < 30 ? "Getting started! Keep generating replies to boost your productivity." :
                         productivity < 60 ? "Good progress! You're becoming more efficient with emails." :
                         productivity < 90 ? "Excellent! You're a productivity powerhouse." :
                         "Outstanding! You're maximizing your email efficiency!"}
                    </Typography>
                </Paper>
            </Box>

            {/* CHARTS */}
            <Grid container spacing={3} mt={3}>
                {/* WEEKLY ACTIVITY */}
                <Grid item xs={12} md={6}>
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
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                            <CalendarTodayIcon sx={{ color: "#c17f59", fontSize: 20 }} />
                            <Typography fontWeight={600} color="#2d2a26">
                                Weekly Activity
                            </Typography>
                        </Box>

                        {weeklyData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={weeklyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4df" />
                                    <XAxis dataKey="day" stroke="#6b6560" fontSize={12} />
                                    <YAxis stroke="#6b6560" fontSize={12} />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: "#fff", 
                                            border: "1px solid #e8e4df",
                                            borderRadius: 8,
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="count"
                                        stroke="#c17f59"
                                        strokeWidth={3}
                                        dot={{ fill: "#c17f59", strokeWidth: 2, r: 4 }}
                                        activeDot={{ r: 6, fill: "#8b9a7d" }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        ) : (
                            <Box sx={{ height: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography color="#6b6560">No activity data yet</Typography>
                            </Box>
                        )}
                    </Paper>
                </Grid>

                {/* TONE USAGE BAR CHART */}
                <Grid item xs={12} md={6}>
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
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                            <PsychologyIcon sx={{ color: "#8b9a7d", fontSize: 20 }} />
                            <Typography fontWeight={600} color="#2d2a26">
                                Tone Usage
                            </Typography>
                        </Box>

                        {toneData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={toneData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e8e4df" />
                                    <XAxis dataKey="name" stroke="#6b6560" fontSize={11} interval={0} angle={-15} textAnchor="end" height={60} />
                                    <YAxis stroke="#6b6560" fontSize={12} />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: "#fff", 
                                            border: "1px solid #e8e4df",
                                            borderRadius: 8,
                                        }}
                                    />
                                    <Bar dataKey="value" fill="#c17f59" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <Box sx={{ height: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography color="#6b6560">No tone data yet</Typography>
                            </Box>
                        )}
                    </Paper>
                </Grid>

                {/* TONE DISTRIBUTION PIE CHART */}
                <Grid item xs={12} md={6}>
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
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                            <AutoAwesomeIcon sx={{ color: "#d49a7a", fontSize: 20 }} />
                            <Typography fontWeight={600} color="#2d2a26">
                                Tone Distribution
                            </Typography>
                        </Box>

                        {toneData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={toneData}
                                        dataKey="value"
                                        nameKey="name"
                                        outerRadius={90}
                                        innerRadius={50}
                                        paddingAngle={3}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        labelLine={false}
                                    >
                                        {toneData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: "#fff", 
                                            border: "1px solid #e8e4df",
                                            borderRadius: 8,
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <Box sx={{ height: 250, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography color="#6b6560">No distribution data yet</Typography>
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>

            {/* RECENT ACTIVITY */}
            <Box mt={5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                    <Box sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: 2, 
                        background: "linear-gradient(135deg, #8b9a7d 0%, #a8b899 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <EmailIcon sx={{ color: "#fff", fontSize: 20 }} />
                    </Box>
                    <Typography fontWeight={600} color="#2d2a26" variant="h6">
                        Recent Activity
                    </Typography>
                </Box>

                {history.length === 0 ? (
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 4, 
                            borderRadius: 4,
                            background: "#faf8f5",
                            border: "1px dashed #e8e4df",
                            textAlign: "center",
                        }}
                    >
                        <Typography color="#6b6560">No activity yet. Start generating replies!</Typography>
                    </Paper>
                ) : (
                    history.slice(0, 5).map((item, index) => (
                        <Paper 
                            key={index}
                            elevation={0}
                            sx={{ 
                                p: 3, 
                                mb: 2, 
                                borderRadius: 3,
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
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Chip 
                                        size="small" 
                                        label={item.tone}
                                        sx={{ 
                                            background: `${getToneColor(item.tone)}15`,
                                            color: getToneColor(item.tone),
                                            fontWeight: 500,
                                            fontSize: 12,
                                        }}
                                    />
                                    <Typography color="#6b6560" fontSize={12}>
                                        {item.date}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography color="#2d2a26" fontSize={14} sx={{ lineHeight: 1.5 }}>
                                {item.email.slice(0, 100)}{item.email.length > 100 ? "..." : ""}
                            </Typography>
                        </Paper>
                    ))
                )}
            </Box>

        </Box>
    );
}

export default DashboardTab;
