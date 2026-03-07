import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Flashcards() {
    const [flashcards, setFlashcards] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/register");
            return;
        }
        fetchFlashcards();
    }, []);

    const fetchFlashcards = async () => {
        const response = await fetch("http://localhost:8080/api/flashcard", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await response.json();
        setFlashcards(data);
    };

    const createFlashcard = async () => {
        if (!question || !answer) {
            return;
        }
        const response = await fetch("http://localhost:8080/api/flashcard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({question, answer})
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
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (response.ok) {
            await fetchFlashcards();
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Flashcards</h1>

            <div style={{ marginBottom: "2rem" }}>
                <input
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    style={{ marginRight: "0.5rem" }}
                />
                <input
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    style={{ marginRight: "0.5rem" }}
                />
                <button onClick={createFlashcard}>Create</button>
            </div>

            {flashcards.length === 0 && <p>No flashcards yet.</p>}
            {flashcards.map(card => (
                <div key={card.id} style={{ border: "1px solid gray", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
                    <p><strong>Q:</strong> {card.question}</p>
                    <p><strong>A:</strong> {card.answer}</p>
                    <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Flashcards;