import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const features = [
    { 
        icon: "⚡", 
        name: "Lightning Fast", 
        desc: "Generate professional email replies in under 3 seconds with our advanced AI.",
        gradient: "from-blue-500 to-purple-600"
    },
    { 
        icon: "🎭", 
        name: "Smart Tones", 
        desc: "Choose from Professional, Friendly, Casual, Formal, and more tone options.",
        gradient: "from-green-500 to-teal-600"
    },
    { 
        icon: "🧠", 
        name: "AI Intelligence", 
        desc: "Context-aware responses that understand your email's intent and purpose.",
        gradient: "from-purple-500 to-pink-600"
    },
    { 
        icon: "📋", 
        name: "Smart Actions", 
        desc: "Copy, download, or save replies with one-click functionality.",
        gradient: "from-orange-500 to-red-600"
    },
    { 
        icon: "📊", 
        name: "Analytics Dashboard", 
        desc: "Track your email productivity with detailed insights and statistics.",
        gradient: "from-cyan-500 to-blue-600"
    },
    { 
        icon: "🚀", 
        name: "Premium Experience", 
        desc: "Modern, intuitive interface designed for maximum productivity.",
        gradient: "from-indigo-500 to-purple-600"
    },
];

function LandingPage({ onLogin }) {

    const [showModal, setShowModal] = useState(false);
    const [authTab, setAuthTab] = useState("login");

    const openModal = (tab) => {
        setAuthTab(tab);
        setShowModal(true);
    };

    return (
        <div className="lp-wrapper">

            {/* NAVBAR */}
            <nav className="lp-nav">
                <div className="lp-nav-logo">
                    <span className="logo-icon">📧</span>
                    <span>EMIPI</span>
                    <span className="logo-badge">PRO</span>
                </div>

                <div className="lp-nav-links">
                    <a className="lp-nav-link" href="#features">Features</a>
                    <Link className="lp-nav-link" to="/pricing">Pricing</Link>
                    <Link className="lp-nav-link" to="/about">About</Link>
                    <Link className="lp-nav-link" to="/contact">Contact</Link>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                    <button className="lp-btn-ghost" onClick={() => openModal("login")}>
                        Sign In
                    </button>
                    <button className="lp-btn-primary" onClick={() => openModal("signup")}>
                        Get Started Free
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <section className="lp-hero">

                <div className="lp-hero-glow"></div>
                <div className="lp-hero-particles"></div>

                <div className="lp-hero-content">
                    <div className="lp-badge">
                        <span className="badge-pulse"></span>
                        🚀 AI-Powered Email Assistant — Smart & Professional Replies
                    </div>

                    <h1 className="lp-title">
                        Transform Your Emails with
                        <span className="title-gradient"> AI-Powered Replies</span>
                        <br />Write <span className="title-highlight">10× Faster</span>
                    </h1>

                    <p className="lp-sub">
                        Stop spending hours crafting emails. EMIPI's advanced AI generates 
                        professional, context-aware responses in seconds. Revolutionize your email workflow.
                    </p>

                    <div className="lp-actions">
                        <button className="lp-btn-hero" onClick={() => openModal("signup")}>
                            <span>Start Writing Smarter</span>
                            <span className="btn-arrow">→</span>
                        </button>
                        <button className="lp-btn-hero-ghost" onClick={() => openModal("login")}>
                            <span>Sign In</span>
                        </button>
                    </div>

                    <div className="lp-trust-badges">
                        <div className="trust-item">
                            <span className="trust-icon">⚡</span>
                            <span className="trust-text">Lightning Fast</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">�</span>
                            <span className="trust-text">Secure & Private</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">🎭</span>
                            <span className="trust-text">Multiple Tones</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="lp-features" id="features">
                <div className="lp-section-label">Why Choose EMIPI</div>
                <h2 className="lp-section-title">Everything You Need to Master Email Communication</h2>

                <div className="lp-feature-grid">
                    {features.map((f, index) => (
                        <div className={`lp-feature-card feature-${index}`} key={f.name}>
                            <div className="lp-feature-icon-wrapper">
                                <div className={`lp-feature-icon ${f.gradient}`}>
                                    {f.icon}
                                </div>
                            </div>
                            <div className="lp-feature-name">{f.name}</div>
                            <div className="lp-feature-desc">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="lp-cta">
                <div className="cta-content">
                    <div className="cta-badge">Limited Time Offer</div>
                    <h2 className="lp-cta-title">
                        Stop Drafting. Start <span className="cta-highlight">Dominating</span> Your Inbox.
                    </h2>
                    <p className="lp-cta-sub">
                        Transform your email productivity with AI-powered assistance. 
                        Get started today and experience smarter email writing.
                    </p>
                    <div className="cta-actions">
                        <button className="lp-btn-hero" onClick={() => openModal("signup")}>
                            <span>Get Started Free</span>
                            <span className="btn-arrow">→</span>
                        </button>
                    </div>
                </div>
                <div className="cta-visual">
                    <div className="cta-chart">
                        <div className="chart-bar" style={{ height: '40%' }}></div>
                        <div className="chart-bar" style={{ height: '80%' }}></div>
                        <div className="chart-bar" style={{ height: '100%' }}></div>
                        <div className="chart-bar" style={{ height: '70%' }}></div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="lp-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="lp-footer-logo">
                            <span className="logo-icon">📧</span>
                            <span>EMIPI</span>
                        </div>
                        <p className="footer-desc">
                            AI-powered email assistant that helps professionals write better emails, faster.
                        </p>
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">𝕏</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">in</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">📷</a>
                        </div>
                    </div>
                    
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Product</h4>
                            <a href="#features">Features</a>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="link-group">
                            <h4>Legal</h4>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/cookies">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="lp-footer-copy">
                        &copy; 2026 EMIPI &middot; Smart Email Replies. All rights reserved.
                    </div>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </footer>

            {/* AUTH MODAL */}
            {showModal && (
                <AuthModal
                    initialTab={authTab}
                    onLogin={onLogin}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default LandingPage;