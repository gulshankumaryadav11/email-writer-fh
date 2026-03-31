import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Paper,
    Typography,
    Button,
    Grid,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeIcon from "@mui/icons-material/Home";

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for getting started",
        features: [
            "10 email replies per month",
            "Basic tone options",
            "Email history",
            "Standard support",
        ],
        color: "#6b6560",
        buttonVariant: "outlined",
    },
    {
        name: "Pro",
        price: "$9",
        period: "/month",
        description: "For professionals who email frequently",
        features: [
            "Unlimited email replies",
            "All tone options",
            "Advanced analytics",
            "Priority support",
            "Export history",
        ],
        color: "#c17f59",
        buttonVariant: "contained",
        popular: true,
    },
];

function PricingPage() {
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
                    <LocalOfferIcon sx={{ color: "#fff", fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={600} color="#2d2a26" variant="h5">
                        Pricing
                    </Typography>
                    <Typography color="#6b6560" fontSize={14}>
                        Simple, transparent pricing for everyone
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

            {/* Pricing Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {plans.map((plan, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: plan.popular 
                                    ? "linear-gradient(145deg, #ffffff 0%, #fdf8f5 100%)"
                                    : "#ffffff",
                                border: plan.popular 
                                    ? `2px solid ${plan.color}`
                                    : "1px solid #e8e4df",
                                boxShadow: plan.popular 
                                    ? "0 8px 30px rgba(193, 127, 89, 0.15)"
                                    : "0 4px 20px rgba(0, 0, 0, 0.05)",
                                position: "relative",
                                height: "100%",
                            }}
                        >
                            {plan.popular && (
                                <Chip
                                    label="Most Popular"
                                    sx={{
                                        position: "absolute",
                                        top: -12,
                                        right: 20,
                                        background: plan.color,
                                        color: "#fff",
                                        fontWeight: 600,
                                        fontSize: 12,
                                    }}
                                />
                            )}

                            <Typography fontWeight={600} color="#2d2a26" variant="h5" mb={1}>
                                {plan.name}
                            </Typography>
                            <Typography color="#6b6560" fontSize={14} mb={3}>
                                {plan.description}
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography 
                                    component="span" 
                                    fontWeight={700} 
                                    color={plan.color}
                                    variant="h3"
                                >
                                    {plan.price}
                                </Typography>
                                <Typography 
                                    component="span" 
                                    color="#6b6560"
                                    fontSize={16}
                                >
                                    {plan.period}
                                </Typography>
                            </Box>

                            <List sx={{ mb: 3 }}>
                                {plan.features.map((feature, idx) => (
                                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <CheckCircleIcon sx={{ color: plan.color, fontSize: 20 }} />
                                        </ListItemIcon>
                                        <ListItemText 
                                            primary={feature}
                                            primaryTypographyProps={{
                                                fontSize: 14,
                                                color: "#2d2a26",
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            <Button
                                component={Link}
                                to="/"
                                fullWidth
                                variant={plan.buttonVariant}
                                sx={{
                                    height: 48,
                                    borderRadius: 3,
                                    background: plan.buttonVariant === "contained" 
                                        ? `linear-gradient(135deg, ${plan.color} 0%, #d49a7a 100%)`
                                        : "transparent",
                                    borderColor: plan.color,
                                    color: plan.buttonVariant === "contained" ? "#fff" : plan.color,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    boxShadow: plan.buttonVariant === "contained" 
                                        ? "0 4px 16px rgba(193, 127, 89, 0.3)"
                                        : "none",
                                    "&:hover": {
                                        background: plan.buttonVariant === "contained"
                                            ? "linear-gradient(135deg, #b8734f 0%, #c17f59 100%)"
                                            : "rgba(193, 127, 89, 0.08)",
                                    }
                                }}
                            >
                                {plan.name === "Free" ? "Get Started Free" : "Coming Soon"}
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* FAQ Section */}
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    background: "linear-gradient(145deg, #f5f1ec 0%, #faf8f5 100%)",
                    border: "1px solid #e8e4df",
                }}
            >
                <Typography fontWeight={600} color="#2d2a26" variant="h6" mb={3}>
                    Frequently Asked Questions
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2 }}>
                            <Typography fontWeight={600} color="#2d2a26" fontSize={15} mb={0.5}>
                                Can I upgrade or downgrade anytime?
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Yes, you can change your plan at any time from your account settings.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2 }}>
                            <Typography fontWeight={600} color="#2d2a26" fontSize={15} mb={0.5}>
                                What payment methods do you accept?
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                We accept all major credit cards and debit cards through secure payment processing.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2 }}>
                            <Typography fontWeight={600} color="#2d2a26" fontSize={15} mb={0.5}>
                                Is there a refund policy?
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                You can cancel your subscription anytime. Refunds are handled on a case-by-case basis.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2 }}>
                            <Typography fontWeight={600} color="#2d2a26" fontSize={15} mb={0.5}>
                                What happens when I reach my limit?
                            </Typography>
                            <Typography color="#6b6560" fontSize={14}>
                                Free users can upgrade to Pro for unlimited access, or wait until the next month.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default PricingPage;
