import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const features = [
    {
        name: "Lightning Fast",
        desc: "Generate professional email replies in seconds.",
    },
    {
        name: "Smart Tones",
        desc: "Choose from multiple reply tones for different situations.",
    },
    {
        name: "AI Intelligence",
        desc: "Generate context-aware replies based on your emails.",
    },
    {
        name: "Smart Actions",
        desc: "Copy, save, and manage replies easily.",
    },
    {
        name: "Analytics",
        desc: "Track productivity and generated email activity.",
    },
    {
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
                        gap: 12
                    }}
                >

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

                <div className="lp-hero-content">

                    <h1 className="lp-title">

                        Write Better Emails
                        <span className="title-gradient">
                            {" "}Faster with AI
                        </span>

                    </h1>

                    <p className="lp-sub">

                        Generate professional and context-aware email replies instantly using AI.

                    </p>

                    <div className="lp-actions">

                        <button
                            className="lp-btn-hero"
                            onClick={() =>
                                openModal("signup")
                            }
                        >

                            Start Free

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

                    Everything You Need for Smart Email Replies

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

                        Generate smart replies instantly and save time every day.

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

                            AI-powered email assistant for faster and smarter communication.

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
