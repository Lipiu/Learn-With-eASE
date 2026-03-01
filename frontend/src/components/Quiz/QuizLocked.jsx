import {useNavigate} from "react-router-dom";
import "./QuizLocked.css";

function QuizLocked(){
    const navigate = useNavigate();
    return(
        <div className="locked-container">
            <div className="locked-card">
                <div className="locked-icon">🔒</div>
                <h1 className="locked-title">Quiz Locked</h1>
                <p className="locked-message">
                    You need to pass the previous quiz to unlock this one.
                </p>
                <div className="locked-buttons">
                    <button className="locked-btn" onClick={() => navigate("/")}>
                        Go to main page
                    </button>
                    <button className="locked-btn" onClick={() => navigate("/section1/theory")}>
                        Go to first chapter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuizLocked;