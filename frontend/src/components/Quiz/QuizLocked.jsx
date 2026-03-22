import {useNavigate,useLocation} from "react-router-dom";
import "./QuizLocked.css";

function QuizLocked(){
    const navigate = useNavigate();
    const location = useLocation();

    const quizNumber=location.state?.quizNumber ?? 1;
    const hasPreviousQuiz = quizNumber > 1;
    const previousSection = quizNumber ? quizNumber - 1 : 1;

    const handleGoToMainPage = () => navigate("/");
    const handleGoToPrevSection = () => {
        navigate(`/section${previousSection}/theory`);
    };

    return(
        <div className="locked-container">
            <div className="locked-card">
                <div className="locked-icon">🔒</div>
                <h1 className="locked-title">Quiz Locked</h1>
                <p className="locked-message">
                    You need to pass the previous quiz to unlock this one.
                </p>
                <div className="locked-buttons">
                    <button className="locked-btn" onClick={handleGoToMainPage}>
                        Go to main page
                    </button>
                    {hasPreviousQuiz && (
                        <button className="locked-btn" onClick={handleGoToPrevSection}>
                            Go to Section {previousSection}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizLocked;