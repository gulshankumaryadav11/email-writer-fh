import React, { useState, useEffect } from "react";

export default function AuthModal({ onLogin, onClose, initialTab }) {

    const [authTab, setAuthTab] = useState(initialTab || "login");

    useEffect(() => {
        if (initialTab) setAuthTab(initialTab);
    }, [initialTab]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
    const API = `${BASE_URL}/api/auth`;

    const parseResponse = async (res) => {
        const text = await res.text();
        try {
            return text ? JSON.parse(text) : {};
        } catch {
            return { message: "Server error" };
        }
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            if (authTab === "login") {

                const res = await fetch(`${API}/login`, {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({
                        email: form.email,
                        password: form.password
                    })
                });

                const data = await parseResponse(res);

                if (!res.ok || !data.token) {
                    setMessage(data.message || "Invalid credentials");
                    return;
                }

                localStorage.setItem("token", data.token);
                setMessage("Login successful ");

                setTimeout(() => {
                    onClose();
                    onLogin();
                }, 800);

            } else {

                const res = await fetch(`${API}/register`, {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({
                        fullName: form.name,
                        email: form.email,
                        password: form.password
                    })
                });

                const data = await parseResponse(res);

                if (!res.ok) {
                    if (data.message?.includes("exists")) {
                        setMessage("Email exists. Enter OTP");
                        setShowOtp(true);
                        return;
                    }
                    setMessage(data.message || "Signup failed");
                    return;
                }

                setMessage("OTP sent to email ");
                setShowOtp(true);
            }

        } catch (error) {
            console.error(error);
            setMessage("Network error");
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        setLoading(true);

        try {
            const res = await fetch(`${API}/verify-otp`, {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({
                    email: form.email,
                    otp
                })
            });

            const data = await parseResponse(res);

            if (data.message?.includes("Already verified")) {
                setMessage("Already verified, please login");
                setShowOtp(false);
                setAuthTab("login");
                return;
            }

            if (!res.ok) {
                setMessage(data.message || "Invalid OTP");
                return;
            }

            setMessage("Account verified  Please login");
            setShowOtp(false);
            setAuthTab("login");

        } catch (error) {
            console.error(error);
            setMessage("Verification failed");
        } finally {
            setLoading(false);
        }
    };

    const resendOtp = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API}/resend-otp?email=${form.email}`, {
                method: "POST"
            });

            const data = await parseResponse(res);

            if (data.message?.includes("already verified")) {
                setMessage("Already verified, please login");
                setShowOtp(false);
                setAuthTab("login");
                return;
            }

            setMessage("OTP resent ");

        } catch (error) {
            console.error(error);
            setMessage("Failed to resend OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lp-overlay" onClick={(e)=> e.target === e.currentTarget && onClose()}>
            <div className="lp-login-card">

                <button className="lp-close-btn" onClick={onClose}>✕</button>

                <h2 className="lp-login-logo">EMIPI</h2>
                <p className="lp-login-sub">AI Email Assistant</p>

                {!showOtp && (
                    <div className="lp-tab-row">
                        <button
                            className={authTab==="login" ? "lp-tab-active":"lp-tab"}
                            onClick={()=>setAuthTab("login")}
                        >
                            Login
                        </button>

                        <button
                            className={authTab==="signup" ? "lp-tab-active":"lp-tab"}
                            onClick={()=>setAuthTab("signup")}
                        >
                            Signup
                        </button>
                    </div>
                )}

                {message && <div className="lp-success">{message}</div>}

                {showOtp ? (
                    <>
                        <input
                            className="lp-field-input"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value)}
                        />

                        <button className="lp-login-btn" onClick={verifyOtp} disabled={loading}>
                            {loading ? "Please wait..." : "Verify OTP"}
                        </button>

                        <button className="lp-btn-ghost" onClick={resendOtp} disabled={loading}>
                            Resend OTP
                        </button>
                    </>
                ) : (

                    <form onSubmit={handleAuth}>

                        {authTab === "signup" && (
                            <input
                                className="lp-field-input"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={(e)=>setForm({...form,name:e.target.value})}
                                required
                            />
                        )}

                        <input
                            className="lp-field-input"
                            placeholder="Email"
                            type="email"
                            value={form.email}
                            onChange={(e)=>setForm({...form,email:e.target.value})}
                            required
                        />

                        <input
                            className="lp-field-input"
                            placeholder="Password"
                            type="password"
                            value={form.password}
                            onChange={(e)=>setForm({...form,password:e.target.value})}
                            required
                        />

                        {authTab === "login" && (
                            <div style={{ textAlign: "right", marginTop: -8, marginBottom: 8 }}>
                                <button
                                    type="button"
                                    onClick={() => setMessage("Password reset feature coming soon")}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        color: "#c17f59",
                                        fontSize: 13,
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        padding: 0,
                                    }}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button className="lp-login-btn" type="submit" disabled={loading}>
                            {loading ? "Please wait..." :
                                authTab==="login" ? "Login" : "Create Account"}
                        </button>

                    </form>
                )}
            </div>
        </div>
    );
}