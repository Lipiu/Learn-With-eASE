import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AccountPage.css";

function AccountPage() {
    const [user, setUser] = useState(null); //state for currently logged-in user
    const [quizResults, setQuizResults] = useState([]); //holds all quiz attempts
    const [allExercises, setAllExercises] = useState([]); // holds all coding exercises
    const [solvedExercises, setSolvedExercises ] = useState([]); // holds exercises the user passed
    const [activeTab, setActiveTab] = useState("quiz"); //trac which tab is active
    const [expandedQuiz, setExpandedQuiz] = useState(null); //track which quiz group is exapnded (null = collapsed)
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

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

            fetch("http://localhost:8080/api/exercises", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => setAllExercises(data))
                .catch(() => console.error("Failed to fetch exercises"));

            fetch("http://localhost:8080/api/exercises/solved/details", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => setSolvedExercises(data))
                .catch(() => console.error("Failed to fetch solved exercises"));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    }

    const totalAttempts = quizResults.length;
    const passedAttempts = quizResults.filter(r => r.passed).length;
    let passRate = 0;
    if(totalAttempts > 0){
        passRate = ((passedAttempts/totalAttempts)*100).toFixed(0);
    }

    //group all attempts by quiz number into an object
    const groupedQuizzes = quizResults.reduce((groups, result) => {
        const key = result.quizNumber;
        if(!groups[key]){
            groups[key] = [];
        }
        groups[key].push(result);
        return groups;
    }, {});

    const totalExercises = allExercises.length;
    const totalSolved = solvedExercises.length;

    let completionRate = 0;
    if(totalExercises > 0){
        completionRate = ((totalSolved/totalExercises) * 100).toFixed(0);
    }

    const exercisesBySection = allExercises.reduce((groups, ex) => {
        const key = ex.sectionNumber;
        if(!groups[key]){
            groups[key] = { total: 0, solved: 0 };
        }
        groups[key].total++;
        return groups;
    }, {});

    solvedExercises.forEach(ex => {
        if(exercisesBySection[ex.sectionNumber]) {
            exercisesBySection[ex.sectionNumber].solved++;
        }
    });

    if(!user){
        return (
            <div className="account-page">
                <div className="not-logged-in">
                    <h1>You are not logged in</h1>
                    <p>
                        <Link to="/register">Register here</Link> or <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
        );
    }

    const firstInitial = user.firstName ? user.firstName[0] : "";
    const lastInitial = user.lastName ? user.lastName[0] : "";
    const initials = (firstInitial + lastInitial).toUpperCase();


    return (
        <div className="account-page">
            <aside className="account-sidebar">
                <div className="account-avatar">{initials}</div>
                <h2 className="account-name">{user.firstName} {user.lastName}</h2>
                <p className="account-email">{user.email}</p>
                <button className="account-logout" onClick={logout}>Logout</button>
            </aside>

            <div className="account-main">
                <div className="account-tabs">
                    <button
                        className={`account-tab ${activeTab === "quiz" ? "active" : ""}`}
                        onClick={() => setActiveTab("quiz")}
                    >
                        Quiz Stats
                    </button>
                    <button
                        className={`account-tab ${activeTab === "exercises" ? "active" : ""}`}
                        onClick={() => setActiveTab("exercises")}
                    >
                        Exercise Stats
                    </button>
                </div>

                {activeTab === "quiz" && (
                    <div className="stats-content">
                        <div className="stats-cards">
                            <div className="stats-card">
                                <span className="stats-card-value">{totalAttempts}</span>
                                <span className="stats-card-label">Total Attempts</span>
                            </div>
                            <div className="stats-card">
                                <span className="stats-card-value">{passRate}%</span>
                                <span className="stats-card-label">Pass Rate</span>
                            </div>
                        </div>

                        {Object.entries(groupedQuizzes)
                            .sort(([a], [b]) => Number(a) - Number(b))
                            .map(([quizNum, attempts]) => {
                                const best = Math.max(...attempts.map(a => a.percentage));
                                const passed = attempts.some(a => a.passed);
                                const isExpanded = expandedQuiz === quizNum;

                                return (
                                    <div key={quizNum} className="quiz-group-card">
                                        <div
                                            className="quiz-group-header"
                                            onClick={() => setExpandedQuiz(isExpanded ? null : quizNum)}
                                        >
                                            <div className="quiz-group-left">
                                                <span className={`quiz-status-dot ${passed ? "passed" : "failed"}`} />
                                                <span className="quiz-group-name">Quiz {quizNum}</span>
                                            </div>
                                            <div className="quiz-group-right">
                                                <span className="quiz-best">Best: {best.toFixed(0)}%</span>
                                                <span className="quiz-attempts-count">{attempts.length} attempt{attempts.length > 1 ? "s" : ""}</span>
                                                <span className="quiz-chevron">{isExpanded ? "▲" : "▼"}</span>
                                            </div>
                                        </div>

                                        {isExpanded && (
                                            <div className="quiz-attempts">
                                                {attempts
                                                    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                                                    .map((attempt, i) => (
                                                        <div key={i} className={`attempt-row ${attempt.passed ? "passed" : "failed"}`}>
                                                            <span className="attempt-label">Attempt {i + 1}</span>
                                                            <span className="attempt-score">{attempt.score}/{attempt.totalQuestions}</span>
                                                            <span className="attempt-percent">({attempt.percentage.toFixed(0)}%)</span>
                                                            <span className={`attempt-status ${attempt.passed ? "passed-text" : "failed-text"}`}>
                                                                {attempt.passed ? "Passed ✅" : "Failed ❌"}
                                                            </span>
                                                            <span className="attempt-date">
                                                                {new Date(attempt.createdAt).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                        {quizResults.length === 0 && (
                            <p className="empty-state">You haven't taken any quizzes yet.</p>
                        )}
                    </div>
                )}

                {activeTab === "exercises" && (
                    <div className="stats-content">
                        <div className="stats-cards">
                            <div className="stats-card">
                                <span className="stats-card-value">{totalSolved}</span>
                                <span className="stats-card-label">Exercises Solved</span>
                            </div>
                            <div className="stats-card">
                                <span className="stats-card-value">{completionRate}%</span>
                                <span className="stats-card-label">Completion Rate</span>
                            </div>
                        </div>

                        {Object.entries(exercisesBySection)
                            .sort(([a], [b]) => Number(a) - Number(b))
                            .map(([section, data]) => (
                                <div key={section} className="section-exercise-card">
                                    <div className="section-exercise-header">
                                        <span className="section-exercise-name">Section {section}</span>
                                        <span className="section-exercise-count">{data.solved} / {data.total} solved</span>
                                    </div>
                                    <div className="section-progress-bar">
                                        <div
                                            className="section-progress-fill"
                                            style={{ width: `${(data.solved / data.total) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}

                        {solvedExercises.length === 0 && (
                            <p className="empty-state">You haven't solved any exercises yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AccountPage;
