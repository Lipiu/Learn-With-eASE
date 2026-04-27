import {useEffect, useRef, useState} from "react";
import "./AIChat.css";

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    const API_URL = "http://localhost:8000/chat";

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleSend = async () => {
        if(!input.trim() || loading)
            return;
        const userMsg = { role: "user", content: input.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input.trim(),
                    history: messages
                }),
            });

            const data = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
        }
        catch (err){
            setMessages((prev) => [...prev, { role: "assistant", content: "Error: Could not connect, ", err }]);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-widget">
            {isOpen && (
                <div className="chat-panel">
                    <header className="chat-header">
                        <span>Programming Assistant</span>
                        <button onClick={() => setIsOpen(false)}>✕</button>
                    </header>

                    <div className="chat-messages">
                        {messages.length === 0 && <p className="chat-empty">Ask me anything!</p>}

                        {messages.map((msg, i) => (
                            <div key={i} className={`chat-message ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}

                        {loading && <div className="chat-message assistant typing">Thinking...</div>}
                        <div ref={scrollRef} />
                    </div>

                    <div className="chat-input-row">
                        <input
                            className="chat-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask a question..."
                            disabled={loading}
                        />
                        <button
                            className="chat-send"
                            onClick={handleSend}
                            disabled={!input.trim() || loading}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "↓" : "💬"}
            </button>
        </div>
    );
}

export default ChatWidget;