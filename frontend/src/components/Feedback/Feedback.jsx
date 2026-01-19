import "./Feedback.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

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

    const handleClick = (category, value) => {
        setRatings({ ...ratings, [category]: value });
    };

    const handleHover = (category, value) => {
        setHover({ ...hover, [category]: value });
    };

    const handleLeave = (category) => {
        setHover({ ...hover, [category]: undefined });
    };

    const handleSubmit = () => {
        if(!isValidFeedback)
            return;
        console.log({
            ratings,
            comment,
        });
        setSubmitted(true);
        setRatings({});
        setComment("");
    }

    return (
        <div className="feedback-page">
            <h2>Feedback</h2>

            {categories.map(({ id, label }) => (
                <div className="feedback-row" key={id}>
                    <span className="feedback-label">{label}</span>

                    <div className="stars">
                        {Array(5)
                            .fill(0)
                            .map((_, index) => (
                                <FaStar
                                    key={index}
                                    color={
                                        (hover[id] || ratings[id]) > index
                                            ? colors.orange
                                            : colors.grey
                                    }
                                    onClick={() => handleClick(id, index + 1)}
                                    onMouseOver={() =>
                                        handleHover(id, index + 1)
                                    }
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
                {!isValidFeedback && (
                    <span className="submit-hint">
                        Please rate all sections before submitting!
                    </span>
                )}
                {submitted && (
                    <div className="success-message">
                        Feedback submitted successfully. Thank you!
                    </div>
                )}
                <button className="submit-feedback" disabled={!isValidFeedback} onClick={handleSubmit}>
                    Submit Feedback
                </button>
            </div>
        </div>
    );
}

export default Feedback;
