import React, { useEffect, useState } from "react";
import "./AccountPage.css";

function AccountPage() {
    const [user, setUser] = useState(null);
    const [quizResults, setQuizResults] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");
        if (storedUser) setUser(storedUser);

        if (token) {
            fetch("http://localhost:8080/api/quiz/results", {
                headers: { "Authorization": `Bearer ${token}` },
            })
                .then(res => res.json())
                .then(data => setQuizResults(data))
                .catch(err => console.error("Failed to fetch quiz results", err));
        }
    }, []);

    if (!user) return <p>You are not logged in...</p>;

    return (
        <div className="account-page">
            <div className="account-card">
                <h1 className="username">{user.firstName} {user.lastName}</h1>
                <p className="email">{user.email}</p>

                <h2 className="quiz-header">Quiz History</h2>
                {quizResults.length === 0 ? (
                    <p className="no-quiz">You haven’t taken any quizzes yet.</p>
                ) : (
                    <div className="quiz-list">
                        {quizResults.map((quiz, idx) => (
                            <div key={idx} className={`quiz-item ${quiz.passed ? "passed" : "failed"}`}>
                                <div className="quiz-main">
                                    <span className="quiz-title">Quiz {idx + 1}</span>
                                    <span className="quiz-score">{quiz.score} / {quiz.totalQuestions}</span>
                                    <span className="quiz-percent">({quiz.percentage.toFixed(0)}%)</span>
                                    <span className={`quiz-status ${quiz.passed ? "passed-text" : "failed-text"}`}>
                    {quiz.passed ? "Passed ✅" : "Failed ❌"}
                  </span>
                                </div>
                                {quiz.createdAt && (
                                    <div className="quiz-date">
                                        Last Attempt: {new Date(quiz.createdAt).toLocaleString()}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

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