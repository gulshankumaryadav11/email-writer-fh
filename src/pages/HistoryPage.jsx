import React, { useState, useEffect } from "react";
import HistoryTab from "../components/HistoryTab";

function HistoryPage() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("history");
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    const handleSetHistory = (newHistory) => {
        setHistory(newHistory);
        localStorage.setItem("history", JSON.stringify(newHistory));
    };

    return <HistoryTab history={history} setHistory={handleSetHistory} />;
}

export default HistoryPage;
