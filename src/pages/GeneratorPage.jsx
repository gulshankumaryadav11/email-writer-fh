import React, { useState, useEffect } from "react";
import GeneratorTab from "../components/GeneratorTab";

function GeneratorPage() {
    const [emailContent, setEmailContent] = useState("");
    const [instructions, setInstructions] = useState("");
    const [tone, setTone] = useState("Professional");
    const [generatedReply, setGeneratedReply] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
    const API_URL = `${BASE_URL}/api/email/generate`;

    // Load history from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("history");
    }, []);

    const handleGenerate = async () => {
        if (!emailContent.trim()) {
            setError("Email required");
            return;
        }

        setLoading(true);
        setError("");
        setGeneratedReply("");

        try {
            const token = localStorage.getItem("token");

            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
                body: JSON.stringify({
                    emailContent,
                    instructions,
                    tone,
                }),
            });

            if (res.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/";
                return;
            }

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Backend error");
            }

            const replyText = await res.text();
            setGeneratedReply(replyText);

            // Save to history
            const saved = localStorage.getItem("history");
            const history = saved ? JSON.parse(saved) : [];
            const newEntry = {
                email: emailContent,
                tone,
                reply: replyText,
                date: new Date().toLocaleString(),
            };
            localStorage.setItem("history", JSON.stringify([newEntry, ...history]));

        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => navigator.clipboard.writeText(generatedReply);

    const handleDownload = () => {
        const blob = new Blob([generatedReply], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "email-reply.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <GeneratorTab
            emailContent={emailContent}
            setEmailContent={setEmailContent}
            instructions={instructions}
            setInstructions={setInstructions}
            tone={tone}
            setTone={setTone}
            generatedReply={generatedReply}
            loading={loading}
            error={error}
            onGenerate={handleGenerate}
            onCopy={handleCopy}
            onDownload={handleDownload}
        />
    );
}

export default GeneratorPage;
