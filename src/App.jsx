import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import GeneratorPage from "./pages/GeneratorPage";
import DashboardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiePage from "./pages/CookiePage";
import landingStyles from "./styles/landingStyles";

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        const handleStorage = () => {
            setIsLoggedIn(!!localStorage.getItem("token"));
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    return (
        <>
            <style>{landingStyles}</style>
            <BrowserRouter>
                <Routes>
                    {/* Public routes */}
                    <Route 
                        path="/" 
                        element={isLoggedIn ? <Navigate to="/generator" replace /> : <LandingPage onLogin={() => setIsLoggedIn(true)} />} 
                    />
                    
                    {/* Protected routes - only accessible when logged in */}
                    <Route path="/" element={isLoggedIn ? <Layout setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" replace />}>
                        <Route path="generator" element={<GeneratorPage />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="history" element={<HistoryPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                    </Route>
                    
                    {/* Public route - accessible without login */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
