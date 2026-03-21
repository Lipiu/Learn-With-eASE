import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AccountPage.css";

// Constants
const TABS = {
    QUIZ: "quiz",
    EXERCISES: "exercises",
    ADMIN: "admin",
};

const API = {
    QUIZ_RESULTS: "http://localhost:8080/api/quiz/results",
    EXERCISES: "http://localhost:8080/api/exercises",
    SOLVED_EXERCISES: "http://localhost:8080/api/exercises/solved/details",
    ADMIN_USERS: "http://localhost:8080/api/admin/users",
    ADMIN_USER_QUIZ: (id) => `http://localhost:8080/api/admin/users/${id}/quiz-results`,
    ADMIN_USER_EXERCISES: (id) => `http://localhost:8080/api/admin/users/${id}/exercise-results`,
    ADMIN_DELETE_USER: (id) => `http://localhost:8080/api/admin/users/${id}`,
}

// Helpers
const authHeader = (token) => ({
    "Authorization": `Bearer ${token}`
});

const groupByQuizNumber = (results) => results.reduce((groups, result) => {
    const key = result.quizNumber;
    if(!groups[key])
        groups[key] = [];
    groups[key].push(result);
    return groups;
}, {});

const calculatePassRate = (results) => {
    if(results.length === 0){
        return 0;
    }
    const passed = results.filter((result) => result.passed).length;
    return ((passed / results.length) * 100).toFixed(0);
};

const calculateCompletionRate = (total, solved) => {
    if(total === 0){
        return 0;
    }
    return ((solved / total) * 100).toFixed(0);
};

const buildExercisesBySection = (allExercises, solvedExercises) => {
    const solvedIds = new Set(solvedExercises.map(exercise => exercise.id));

    return allExercises.reduce((groups, exercise) => {
        const key = exercise.sectionNumber;
        if (!groups[key]) {
            groups[key] = { total: 0, solved: 0 };
        }
        groups[key].total++;
        if (solvedIds.has(exercise.id)) {
            groups[key].solved++;
        }
        return groups;
    }, {});
};

const getInitials = (firstName, lastName) => {
    const first = firstName ? firstName[0] : "";
    const last = lastName ? lastName[0] : "";
    return (first + last).toUpperCase();
}

function AccountPage() {

    // Authentication
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const isAdmin = storedUser && storedUser.role === "ADMIN";

    // Admin
    const [users, setUsers] = useState([]);
    const [selectedAdminUser, setSelectedAdminUser] = useState(null);
    const [selectedUserQuizResults, setSelectedUserQuizResults] = useState([]);
    const [selectedUserExerciseResults, setSelectedUserExerciseResults] = useState([]);


    // Quiz
    const [quizResults, setQuizResults] = useState([]); //holds all quiz attempts
    const [expandedQuiz, setExpandedQuiz] = useState(null); //track which quiz group is expanded (null = collapsed)

    // Quiz derived
    const passRate = calculatePassRate(quizResults);

    //group all attempts by quiz number into an object
    const groupedQuizzes = groupByQuizNumber(quizResults);

    // Coding exercises
    const [allExercises, setAllExercises] = useState([]); // holds all coding exercises
    const [solvedExercises, setSolvedExercises ] = useState([]); // holds exercises the user passed

    // Coding exercises derived
    const totalExercises = allExercises.length;
    const totalSolved = solvedExercises.length;
    const completionRate = calculateCompletionRate(totalExercises, totalSolved);
    const exercisesBySection = buildExercisesBySection(allExercises, solvedExercises);

    // UI
    const [activeTab, setActiveTab] = useState(TABS.QUIZ); //track which tab is active

    const navigate = useNavigate();

    // Data fetching
    const loadQuizResults = () => {
        fetch(API.QUIZ_RESULTS, {
            headers: authHeader(token)
        })
            .then((res) => res.json())
            .then((data) => setQuizResults(data))
            .catch(() => console.error("Failed to fetch quiz results"));
    };

    const loadExercises = () => {
        fetch(API.EXERCISES, {
            headers: authHeader(token)
        })
            .then((res) => res.json())
            .then((data) => setAllExercises(data))
            .catch(() => console.error("Failed to fetch exercises"));
    };

    const loadSolvedExercises = () => {
        fetch(API.SOLVED_EXERCISES, {
            headers: authHeader(token)
        })
            .then((res) => res.json())
            .then((data) => setSolvedExercises(data))
            .catch(() => console.error("Failed to fetch solved exercises"));
    };

    const fetchUsers = async () => {
        const response = await fetch(API.ADMIN_USERS, {
            headers: authHeader(token)
        })
        const data = await response.json();
        setUsers(data);
    };

    const fetchUserProgress = async (userId) => {
        const [quizResponse, exerciseResponse] = await Promise.all([
            fetch(API.ADMIN_USER_QUIZ(userId), {
                headers: authHeader(token)
            }),
            fetch(API.ADMIN_USER_EXERCISES(userId), {
                headers: authHeader(token)
            }),
        ]);

        const [quizData, exerciseData] = await Promise.all([
            quizResponse.json(),
            exerciseResponse.json(),
        ]);

        setSelectedUserQuizResults(quizData);
        setSelectedUserExerciseResults(exerciseData);
    };

    const deleteUser = async (id) => {
        const response = await fetch(API.ADMIN_DELETE_USER(id), {
            method: "DELETE",
            headers: authHeader(token),
        });
        if(response.ok){
            if(selectedAdminUser && selectedAdminUser.id === id){
                setSelectedAdminUser(null);
                setSelectedUserQuizResults([]);
                setSelectedUserExerciseResults([]);
            }
            await fetchUsers();
        }
    };

    useEffect(() => {
        if(!token)
            return;
        loadQuizResults();
        loadExercises();
        loadSolvedExercises();

        if(isAdmin) {
            (async () => await fetchUsers())();
        }
    }, []);

    if(!storedUser){
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

    const initials = getInitials(storedUser.firstName, storedUser.lastName);


    return (
        <div className="account-page">
            <aside className="account-sidebar">
                <div className="account-avatar">{initials}</div>
                <h2 className="account-name">{storedUser.firstName} {storedUser.lastName}</h2>
                <p className="account-email">{storedUser.email}</p>
                <button className="account-logout" onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    navigate("/login");
                }}>
                    Logout
                </button>
            </aside>

            <div className="account-main">
                <div className="account-tabs">
                    <button
                        className={`account-tab ${activeTab === TABS.QUIZ ? "active" : ""}`}
                        onClick={() => setActiveTab(TABS.QUIZ)}
                    >
                        Quiz Stats
                    </button>
                    <button
                        className={`account-tab ${activeTab === TABS.EXERCISES ? "active" : ""}`}
                        onClick={() => setActiveTab(TABS.EXERCISES)}
                    >
                        Exercise Stats
                    </button>
                    {isAdmin && (
                        <button
                            className={`account-tab ${activeTab === TABS.ADMIN ? "active" : ""}`}
                            onClick={() => setActiveTab(TABS.ADMIN)}
                        >
                            Admin
                        </button>
                    )}
                </div>

                {activeTab === TABS.QUIZ && (
                    <div className="stats-content">
                        <div className="stats-cards">
                            <div className="stats-card">
                                <span className="stats-card-value">{quizResults.length}</span>
                                <span className="stats-card-label">Total Attempts</span>
                            </div>
                            <div className="stats-card">
                                <span className="stats-card-value">{passRate}%</span>
                                <span className="stats-card-label">Pass Rate</span>
                            </div>
                        </div>

                        {quizResults.length === 0 ? (
                            <p className="empty-state">You haven't taken any quizzes yet.</p>
                        ) : (
                            Object.entries(groupedQuizzes)
                                .sort(([a], [b]) => Number(a) - Number(b))
                                .map(([quizNum, attempts]) => {
                                    const best = Math.max(...attempts.map((attempt) => attempt.percentage));
                                    const passed = attempts.some((attempt) => attempt.passed);
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
                                                {[...attempts]
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
                            })
                        )}
                    </div>
                )}

                {activeTab === TABS.EXERCISES && (
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

                        {solvedExercises.length === 0 ? (
                            <p className="empty-state">You haven't solved any exercises yet.</p>
                        ) : (
                            Object.entries(exercisesBySection)
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
                                ))
                        )}
                    </div>
                )}
                {activeTab === TABS.ADMIN && (
                    <div className="stats-content">
                        <h3 className="admin-section-title">Registered Users</h3>
                        {users.length === 0 ? (
                            <p className="empty-state">No users found.</p>
                        ):(
                            users.map(registeredUser => (
                                <div
                                    key={registeredUser.id}
                                    className={`user-row ${selectedAdminUser && selectedAdminUser.id === registeredUser.id ? "selected" : ""}`}
                                    onClick={() => {
                                        setSelectedAdminUser(registeredUser);
                                        fetchUserProgress(registeredUser.id);
                                    }}
                                >
                                    <div className="user-info">
                                        <span className="user-name">{registeredUser.firstName} {registeredUser.lastName}</span>
                                        <span className="user-email">{registeredUser.email}</span>
                                        <span className={`user-role ${registeredUser.role === "ADMIN" ? "role-admin" : "role-user"}`}>{registeredUser.role}</span>
                                    </div>
                                    {/*show delete button only if the user is not ADMIN (cannot delete admin account) */}
                                    {registeredUser.role !== "ADMIN" && (
                                        <button
                                            className="delete-user-btn"
                                            onClick={(e) => { e.stopPropagation(); deleteUser(registeredUser.id); }}
                                        >
                                            Delete User
                                        </button>
                                    )}
                                </div>
                            ))
                        )}
                        {selectedAdminUser && (
                            <div className="user-progress-section">
                                <h3 className="admin-section-title">
                                    Progress for {selectedAdminUser.firstName} {selectedAdminUser.lastName}
                                </h3>
                                <h4 className="progress-subtitle">Quiz Results</h4>
                                {selectedUserQuizResults.length === 0 ? (
                                    <p className="empty-state">No quiz attempts yet.</p>
                                ):(
                                    Object.entries(groupByQuizNumber(selectedUserQuizResults))
                                        .sort(([a], [b]) => Number(a) - Number(b))
                                        .map(([quizNum, attempts]) => {
                                        const best = Math.max(...attempts.map(attempt => attempt.percentage));
                                        const passed = attempts.some(attempt => attempt.passed);
                                        return (
                                            <div key={quizNum} className="user-progress-row">
                                                <span className={`quiz-status-dot ${passed ? "passed" : "failed"}`} />
                                                <span className="user-progress-label">Quiz {quizNum}</span>
                                                <span className="user-progress-detail">Best: {best.toFixed(0)}%</span>
                                                <span className="user-progress-detail">{attempts.length} attempt{attempts.length > 1 ? "s" : ""}</span>
                                                <span className={passed ? "passed-text" : "failed-text"}>{passed ? "Passed ✅" : "Failed ❌"}</span>
                                            </div>
                                        );
                                    })
                                )}
                                <h4 className="progress-subtitle">Exercises solved</h4>
                                {selectedUserExerciseResults.filter(result => result.passed).length === 0 ? (
                                    <p className="empty-state">No exercises solved yet.</p>
                                ):(
                                    selectedUserExerciseResults.filter(result => result.passed).map((result, index)=> (
                                        <div key={index} className="user-progress-row">
                                            <span className="quiz-status-dot passed" />
                                            <span className="user-progress-label">{result.codingExercise.title}</span>
                                            <span className="user-progress-detail">Section {result.codingExercise.sectionNumber}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AccountPage;
