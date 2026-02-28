import React, { useEffect, useState } from "react";
import "./AccountPage.css";
import {Link} from "react-router-dom";

function AccountPage() {
    const [user, setUser] = useState(null); //state for currently logged-in user
    const [quizResults, setQuizResults] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        //if user exists set it to state
        if(storedUser){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(storedUser);
        }

        if(token){
            fetch("http://localhost:8080/api/quiz/results", {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
                .then(res => res.json()) //parse the response as json
                .then(data => setQuizResults(data)) // we set quizResult with state fetched data
                .catch(() => console.error("Failed to fetch quiz results"))
        }
    }, []);

    return (
        <div className="account-page">
            <div className="account-card">
                {user ? (
                    <>
                        <h1 className="username">
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="email">
                            {user.email}
                        </p>
                    </>
                ) : (
                    <div className="not-logged-in">
                        <h1>You are not logged in</h1>
                        <p>
                            <Link to="/register">Register <span className="link-register">here</span></Link> or <Link to="/login">Log in <span className="link-register">here</span></Link>
                        </p>
                    </div>
                )}

                <h2 className="quiz-header">Quiz History</h2>
                {user && quizResults.length === 0 && <p className="no-quiz">You haven’t taken any quizzes yet.</p>}

                {user && quizResults.length > 0 && (() => {
                    const grouped = quizResults.reduce((acc, quiz) => {
                        const key = quiz.quizNumber;
                        if(!acc[key]){
                            acc[key] = [];
                        }
                        acc[key].push(quiz);
                        return acc;
                }, {});

                    return (
                        <div className="quiz-list">
                            {Object.entries(grouped)
                                    .sort(([a], [b]) => Number(a) - Number(b))
                                .map(([quizNum, attempts]) => (
                                    <div key={quizNum} className="quiz-group">
                                        <h3 className="quiz-group-title">Quiz {quizNum}</h3>
                                        {attempts
                                            .sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
                                            .map((quiz, attemptIdx) => (
                                            <div key={attemptIdx} className={`quiz-item ${quiz.passed ? "passed" : "failed"}`}>
                                                <div className="quiz-main">
                                                    <span className="quiz-title">Attempt {attemptIdx + 1}</span>
                                                    <span className="quiz-score">{quiz.score} / {quiz.totalQuestions}</span>
                                                    <span className="quiz-percent">({quiz.percentage.toFixed(0)}%)</span>
                                                    <span className={`quiz-status ${quiz.passed ? "passed-text" : "failed-text"}`}>
                                                        {quiz.passed ? "Passed ✅" : "Failed ❌"}
                                                    </span>
                                                </div>
                                                {quiz.createdAt && (
                                                    <div className="quiz-date">
                                                        {new Date(quiz.createdAt).toLocaleString()}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    );
                })()}

                {user && (
                    <button
                        className="logout-btn"
                        onClick={() => {
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                            window.location.href = "/login";
                        }}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default AccountPage;
