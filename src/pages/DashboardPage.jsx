import React, { useState, useEffect } from "react";
import DashboardTab from "../components/DashboardTab";

function DashboardPage() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("history");
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    return <DashboardTab history={history} />;
}

export default DashboardPage;
