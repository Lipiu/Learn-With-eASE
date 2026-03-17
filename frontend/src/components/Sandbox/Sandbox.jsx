import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import "./Sandbox.css";

function Sandbox() {
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [code, setCode] = useState("");
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [solvedIds, setSolvedIds] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://localhost:8080/api/exercises")
            .then(res => res.json())
            .then(data => setExercises(data));
    }, []);

    const selectExercise = (exercise) => {
        setSelectedExercise(exercise);
        setCode(exercise.starterCode);
        setOutput(null);
    };

    const groupedExercises  = exercises.reduce((groups, exercise) => {
        const section = exercise.sectionNumber;
        if(!groups[section]){
            groups[section] = [];
        }
        groups[section].push(exercise);
        return groups;
    }, {});

    const submitCode = async () => {
        if (!selectedExercise) return;
        setLoading(true);
        setOutput(null);
        try {
            const response = await fetch(`http://localhost:8080/api/exercises/${selectedExercise.id}/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ code })
            });
            if (!response.ok) {
                setOutput({ passed: false, message: "Server error: " + response.status });
                return;
            }
            const result = await response.json();
            setOutput(result);
            if (result.passed) {
                setSolvedIds(prev => [...new Set([...prev, selectedExercise.id])]);
            }
        } catch (err) {
            setOutput({ passed: false, message: "Error: " + err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sandbox-page">
            <aside className="sandbox-sidebar">
                <h3 className="sidebar-heading">Exercises</h3>
                {Object.entries(groupedExercises).map(([section, sectionExercises]) => (
                    <div key={section} className="exercise-group">
                        <div className="exercise-group-header">
                            <span className="exercise-group-label">
                                Section {section}
                            </span>
                            <div className="exercise-group-line"/>
                        </div>
                        <ul className="exercise-list">
                            {sectionExercises.map(ex => (
                                <li
                                    key={ex.id}
                                    className={`exercise-item ${selectedExercise?.id === ex.id ? "active" : ""}`}
                                    onClick={() => selectExercise(ex)}
                                >
                                    <span className="exercise-title">
                                        {ex.title}
                                    </span>
                                    {solvedIds.includes(ex.id) && (
                                        <span className="exercise-badge solved">✓</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>

            <div className="sandbox-main">
                {!selectedExercise ? (
                    <div className="sandbox-empty">
                        <p>Select an exercise to get started</p>
                    </div>
                ) : (
                    <>
                        <div className="exercise-description">
                            <h2 className="exercise-name">{selectedExercise.title}</h2>
                            <p className="exercise-desc">{selectedExercise.description}</p>
                        </div>

                        <div className="editor-wrapper">
                            <Editor
                                height="380px"
                                language="java"
                                value={code}
                                onChange={(val) => setCode(val)}
                                theme="vs-dark"
                                options={{
                                    fontSize: 14,
                                    minimap: { enabled: false },
                                    scrollBeyondLastLine: false,
                                }}
                            />
                        </div>

                        <div className="sandbox-footer">
                            <button
                                className="submit-btn"
                                onClick={submitCode}
                                disabled={loading}
                            >
                                {loading ? "Running..." : "Submit"}
                            </button>

                            {output && (
                                <div className={`output-box ${output.passed ? "output-success" : "output-error"}`}>
                                    <pre>{output.message}</pre>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Sandbox;