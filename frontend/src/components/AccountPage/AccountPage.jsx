import React, { useEffect, useState } from "react";
import "./AccountPage.css";

function AccountPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser) setUser(storedUser);
        } catch {
            console.warn("No user in localStorage or invalid JSON");
        }
    }, []);

    if (!user) return <p>You are not logged in...</p>;

    return (
        <div className="account-page">
            <div className="account-card">
                <h2 className="username">{user.firstName} {user.lastName}</h2>
                <p className="email">{user.email}</p>
                <button
                    className="logout-btn"
                    onClick={() => {
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                        window.location.href = "/";
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default AccountPage;
