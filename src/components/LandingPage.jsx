import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import ExtensionIcon from "@mui/icons-material/Extension";

const features = [
    {
        icon: <BoltRoundedIcon />,
        name: "Lightning Fast",
        desc: "Generate professional email replies in seconds.",
    },
    {
        icon: <AutoAwesomeRoundedIcon />,
        name: "Smart Tones",
        desc: "Choose from multiple reply tones for different situations.",
    },
    {
        icon: <PsychologyRoundedIcon />,
        name: "AI Intelligence",
        desc: "Generate context-aware replies based on your emails.",
    },
    {
        icon: <ContentCopyRoundedIcon />,
        name: "Smart Actions",
        desc: "Copy, save, and manage replies easily.",
    },
    {
        icon: <AnalyticsRoundedIcon />,
        name: "Analytics",
        desc: "Track productivity and generated email activity.",
    },
    {
        icon: <TrendingUpRoundedIcon />,
        name: "Better Workflow",
        desc: "Improve email writing speed and efficiency.",
    },
];

function LandingPage({ onLogin }) {

    const [showModal, setShowModal] =
        useState(false);

    const [authTab, setAuthTab] =
        useState("login");

    const openModal = (tab) => {

        setAuthTab(tab);
        setShowModal(true);
    };

    return (

        <div className="lp-wrapper">

            <nav className="lp-nav">

                <div className="lp-nav-logo">

                    <div className="brand-icon">
                        <AutoAwesomeRoundedIcon />
                    </div>

                    <span>
                        EMIPI
                    </span>

                </div>

                <div className="lp-nav-links">

                    <a
                        className="lp-nav-link"
                        href="#features"
                    >
                        Features
                    </a>

                    <a
                        className="lp-nav-link"
                        href="#how"
                    >
                        How It Works
                    </a>

                    <Link
                        className="lp-nav-link"
                        to="/pricing"
                    >
                        Pricing
                    </Link>

                    <Link
                        className="lp-nav-link"
                        to="/about"
                    >
                        About
                    </Link>

                    <Link
                        className="lp-nav-link"
                        to="/contact"
                    >
                        Contact
                    </Link>

                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16
                    }}
                >

                    <div className="chrome-badge">

                        <ExtensionIcon
                            sx={{
                                fontSize: 18
                            }}
                        />

                        Chrome Extension

                    </div>

                    <button
                        className="lp-btn-ghost"
                        onClick={() =>
                            openModal("login")
                        }
                    >
                        Sign In
                    </button>

                    <button
                        className="lp-btn-primary"
                        onClick={() =>
                            openModal("signup")
                        }
                    >
                        Get Started
                    </button>

                </div>

            </nav>

            <section className="lp-hero">
                <div className="lp-hero-left">
                    <div className="hero-badge">
                        <AutoAwesomeRoundedIcon
                            sx={{
                                fontSize: 18
                            }}
                        />
                        AI Powered Email Assistant
                    </div>
                    <h1 className="lp-title">
                        Write Better
                        <span className="title-gradient">
                            {" "}Email Replies
                        </span>
                        <br />

            in Seconds.

        </h1>

        <p className="lp-sub">

            EMIPI understands your conversations
            and generates professional replies
            instantly. Save time, improve communication,
            and reply faster with AI assistance.

        </p>

        <div className="lp-actions">

            <button
                className="lp-btn-hero"
                onClick={() =>
                    openModal("signup")
                }
            >

                Get Started Free

            </button>

            <button
                className="lp-btn-hero-ghost"
                onClick={() =>
                    openModal("login")
                }
            >

                Sign In

            </button>

        </div>

        <div className="lp-trust-points">

            <div className="trust-point">

                <CheckCircleRoundedIcon
                    sx={{
                        fontSize: 18
                    }}
                />

                Gmail Compatible

            </div>

            <div className="trust-point">

                <CheckCircleRoundedIcon
                    sx={{
                        fontSize: 18
                    }}
                />

                Human-like Replies

            </div>

            <div className="trust-point">

                <CheckCircleRoundedIcon
                    sx={{
                        fontSize: 18
                    }}
                />

                Faster Workflow

            </div>

        </div>

    </div>

    <div className="lp-hero-right">

        <div className="email-preview">

            <div className="email-preview-header">

                <EmailRoundedIcon />

                Incoming Email

            </div>

            <div className="email-message">

                Hi Gulshan,
                <br />
                Can you please share the project
                update by tomorrow morning?

            </div>

            <div className="generated-label">

                <AutoAwesomeRoundedIcon
                    sx={{
                        fontSize: 16
                    }}
                />

                AI Generated Reply

            </div>

            <div className="reply-box">

                Sure! I'll prepare the complete
                update and send it by tomorrow
                morning. Let me know if there
                is anything specific you'd like
                included.

            </div>

            <button className="insert-btn">

                <SendRoundedIcon
                    sx={{
                        fontSize: 18
                    }}
                />

                Insert Reply

            </button>

        </div>

    </div>

</section>

            <section
                className="lp-features"
                id="features"
            >

                <div className="lp-section-label">

                    Features

                </div>

                <h2 className="lp-section-title">

                    Everything You Need for Smarter Email Communication

                </h2>

                <div className="lp-feature-grid">

                    {features.map((f) => (

                        <div
                            className="lp-feature-card"
                            key={f.name}
                        >

                            <div className="lp-feature-name">

                                {f.name}

                            </div>

                            <div className="lp-feature-desc">

                                {f.desc}

                            </div>

                        </div>
                    ))}

                </div>

            </section>

            <section className="lp-cta">

                <div className="cta-content">

                    <h2 className="lp-cta-title">

                        Improve Your Email Workflow with AI

                    </h2>

                    <p className="lp-cta-sub">

                        Generate smart replies instantly,
                        save time, and handle emails more efficiently.

                    </p>

                    <button
                        className="lp-btn-hero"
                        onClick={() =>
                            openModal("signup")
                        }
                    >

                        Get Started

                    </button>

                </div>

            </section>

            <footer className="lp-footer">

                <div className="footer-content">

                    <div className="footer-brand">

                        <div className="lp-footer-logo">

                            EMIPI

                        </div>

                        <p className="footer-desc">

                            Generate professional email replies quickly
                            with AI-powered assistance built for
                            modern communication.

                        </p>

                    </div>

                    <div className="footer-links">

                        <div className="link-group">

                            <h4>
                                Product
                            </h4>

                            <a href="#features">
                                Features
                            </a>

                            <Link to="/pricing">
                                Pricing
                            </Link>

                            <Link to="/about">
                                About
                            </Link>

                            <Link to="/contact">
                                Contact
                            </Link>

                        </div>

                        <div className="link-group">

                            <h4>
                                Legal
                            </h4>

                            <Link to="/privacy">
                                Privacy Policy
                            </Link>

                            <Link to="/terms">
                                Terms of Service
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <div className="lp-footer-copy">

                        © 2026 EMIPI. All rights reserved.

                    </div>

                </div>

            </footer>

            {showModal && (

                <AuthModal
                    initialTab={authTab}
                    onLogin={onLogin}
                    onClose={() =>
                        setShowModal(false)
                    }
                />

            )}

        </div>
    );
}

export default LandingPage;
