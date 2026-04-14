import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Flashcard.css";

function Flashcards() {
    const [flashcards, setFlashcards] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [flipped, setFlipped] = useState({});
    const [editingId, setEditingId] = useState(null);
    const [editQuestion, setEditQuestion] = useState("");
    const [editAnswer, setEditAnswer] = useState("");

    const token = localStorage.getItem("token");
    const authHeader = { "Authorization": `Bearer ${token}` };

    const fetchFlashcards = async () => {
        const response = await fetch("http://localhost:8080/api/flashcard", {
            headers: authHeader
        });
        const data = await response.json();
        setFlashcards(data);
    };

    useEffect(() => {
        if(!token){
            return;
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchFlashcards();
    }, []);

    if(!token){
        return (
            <div className="fc-page">
                <div className="not-logged-in">
                    <h1>You are not logged in</h1>
                    <p>
                        Register <Link className="fc-link" to="/register">here</Link> or Login <Link className="fc-link" to="/login">here</Link>
                    </p>
                </div>
            </div>
        )
    }

    const createFlashcard = async () => {
        if (!question || !answer) return;
        const response = await fetch("http://localhost:8080/api/flashcard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...authHeader
            },
            body: JSON.stringify({ question, answer })
        });
        if (response.ok) {
            setQuestion("");
            setAnswer("");
            await fetchFlashcards();
        }
    };

    const deleteFlashcard = async (id) => {
        const response = await fetch(`http://localhost:8080/api/flashcard/${id}`, {
            method: "DELETE",
            headers: authHeader
        });
        if (response.ok) await fetchFlashcards();
    };

    const saveEdit = async (id) => {
        const response = await fetch(`http://localhost:8080/api/flashcard/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...authHeader
            },
            body: JSON.stringify({ question: editQuestion, answer: editAnswer })
        });
        if (response.ok) {
            setEditingId(null);
            await fetchFlashcards();
        }
    };

    const toggleFlip = (id) => {
        setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const startEdit = (card) => {
        setEditingId(card.id);
        setEditQuestion(card.question);
        setEditAnswer(card.answer);
    };

    return (
        <div className="fc-page">
            <div className="fc-header">
                <h1 className="fc-title">My Flashcards</h1>
                <p className="fc-subtitle">Click a card to reveal the answer</p>
            </div>

            {/* Create form */}
            <div className="fc-form">
                <input
                    className="fc-input"
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && createFlashcard()}
                />
                <input
                    className="fc-input"
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && createFlashcard()}
                />
                <button className="fc-create-btn" onClick={createFlashcard}>
                    + Add Card
                </button>
            </div>

            {/* Cards grid */}
            {flashcards.length === 0 ? (
                <div className="fc-empty">
                    <p>No flashcards yet. Create your first one above!</p>
                </div>
            ) : (
                <div className="fc-grid">
                    {flashcards.map((card, idx) => (
                        <div
                            key={card.id}
                            className="fc-card-wrapper"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                            {editingId === card.id ? (
                                <div className="fc-card fc-edit-mode">
                                    <input
                                        className="fc-input fc-edit-input"
                                        value={editQuestion}
                                        onChange={e => setEditQuestion(e.target.value)}
                                        placeholder="Question"
                                    />
                                    <input
                                        className="fc-input fc-edit-input"
                                        value={editAnswer}
                                        onChange={e => setEditAnswer(e.target.value)}
                                        placeholder="Answer"
                                    />
                                    <div className="fc-actions">
                                        <button className="fc-save-btn" onClick={() => saveEdit(card.id)}>Save</button>
                                        <button className="fc-cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className={`fc-card ${flipped[card.id] ? "flipped" : ""}`}
                                    onClick={() => toggleFlip(card.id)}
                                >
                                    <div className="fc-card-inner">
                                        <div className="fc-card-front">
                                            <span className="fc-card-label">Q</span>
                                            <p className="fc-card-text">{card.question}</p>
                                        </div>
                                        <div className="fc-card-back">
                                            <span className="fc-card-label">A</span>
                                            <p className="fc-card-text">{card.answer}</p>
                                        </div>
                                    </div>
                                    <div className="fc-card-actions" onClick={e => e.stopPropagation()}>
                                        <button className="fc-edit-btn" onClick={() => startEdit(card)}>Edit</button>
                                        <button className="fc-delete-btn" onClick={() => deleteFlashcard(card.id)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Flashcards;