import {useNavigate,useLocation} from "react-router-dom";
import "./QuizLocked.css";

function QuizLocked(){
    const navigate = useNavigate();
    const location = useLocation();
    const quizNumber=location.state?.quizNumber;
    const prevSection = quizNumber ? quizNumber - 1 : 1;
    const isLastQuiz = quizNumber === 6;
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
                    {!isLastQuiz && (
                        <button className="locked-btn" onClick={() => navigate(`/section${prevSection}/theory`)}>
                            Go to Section {prevSection}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizLocked;