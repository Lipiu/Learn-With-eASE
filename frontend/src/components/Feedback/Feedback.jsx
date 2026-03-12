import "./Feedback.css";
import { FaStar } from "react-icons/fa";
import {useEffect, useState} from "react";

const categories = [
    { id: "ease", label: "Ease of use" },
    { id: "learning", label: "Learning experience" },
    { id: "ui", label: "User interface" },

];

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
};

function Feedback() {
    const [ratings, setRatings] = useState({});
    const [hover, setHover] = useState({});
    const isValidFeedback = categories.every(({ id }) => ratings[id] > 0);
    const [submitted, setSubmitted] = useState(false);
    const [comment, setComment] = useState("");
    const [feedbackList, setFeedbackList] = useState([]);

    const fetchFeedback = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/api/feedback", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if(!response.ok){
                throw new Error("Failed to fetch feedback");
            }
            const data = await response.json();
            setFeedbackList(data);
        }
        catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFeedback();
    }, []);


    const handleClick = (category, value) => {
        setRatings({ ...ratings, [category]: value });
    };

    const handleHover = (category, value) => {
        setHover({ ...hover, [category]: value });
    };

    const handleLeave = (category) => {
        setHover({ ...hover, [category]: undefined });
    };

    const handleSubmit = async () => {
        if(!isValidFeedback) {
            return;
        }

        const token = localStorage.getItem("token");
        if(!token){
            alert("You must be logged in to submit feedback!");
            return;
        }
        try{
            const response = await fetch("http://localhost:8080/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    easeOfUseRating: ratings.ease,
                    learningExperienceRating: ratings.learning,
                    uiRating: ratings.ui,
                    comment: comment
                })
            });
            if(!response.ok){
                throw new Error("Failed to submit feedback");
            }

            setSubmitted(true);
            setRatings({});
            setComment("");
            await fetchFeedback();

        }
        catch(error){
            console.error(error);
            alert("Error while submitting feedback");
        }
    };

    return (
        <div className="feedback-page">
            <div className="feedback-page-container">
                <div className="feedback-columns">
                    <div className="feedback-form">
                        {categories.map(({id, label}) => (
                            <div className="feedback-row" key={id}>
                                <span className="feedback-label">{label}</span>
                                <div className="stars">
                                    {Array(5).fill(0).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            color={(hover[id] || ratings[id]) > i ? colors.orange : colors.grey}
                                            onClick={() => handleClick(id, i + 1)}
                                            onMouseOver={() => handleHover(id, i + 1)}
                                            onMouseLeave={() => handleLeave(id)}
                                        />
                                        ))}
                                </div>
                            </div>
                        ))}
                        <textarea
                            className="text-feedback"
                            placeholder="Additional comments and how can we improve (optional)"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <div className="submit-btn">
                            <span className="submit-hint">
                                {!isValidFeedback && "Please rate all sections before submitting!"}
                            </span>

                            {submitted && (
                                <div className="success-message">
                                    Feedback submitted successfully. Thank you!
                                </div>
                            )}

                            <button
                                className="submit-feedback"
                                disabled={!isValidFeedback}
                                onClick={handleSubmit}
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                    <div className="feedback-list">
                        <h3>Previous feedback</h3>
                        {feedbackList.length === 0 ? (
                            <p>No feedback yet.</p>
                        ) : (
                            feedbackList.map((fb) => (
                                <div
                                    key={fb.id} className="feedback-item">
                                    <p><strong>{fb.user?.firstName} {fb.user?.lastName}</strong></p>
                                    <p>Ease of use: {fb.easeOfUseRating} ⭐</p>
                                    <p>Learning experience: {fb.learningExperienceRating} ⭐</p>
                                    <p>UI: {fb.uiRating} ⭐</p>
                                    {fb.comment && <p>Comment: {fb.comment}</p>}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
