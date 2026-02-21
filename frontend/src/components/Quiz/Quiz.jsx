import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./Quiz.css";
import questions from "./Questions/questions.js";

function Quiz(){
<<<<<<< HEAD
    const [currentQuestion, setCurrentQuestion] = useState(0); // which question the user is currently on
    const [selectedAnswer, setSelectedAnswer] = useState(null); // user's selected answer
    const [score, setScore] = useState(0); // keeps track of how many correct answers the user currently has
    const [showResult, setShowResult] = useState(false); // checks whether the quiz is finished and displays result

    const navigate = useNavigate(); // we use 'useNavigate' to redirect the user to /section2/theory if score > 50%

    //here we save user answer and store it in selectedAnswer
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNext = () => {
        if(selectedAnswer.isCorrect){ //if user answer is correct we increment the score
            setScore(score + 1);
        }
        setSelectedAnswer(null); //reset selected to null

        if(currentQuestion + 1 < questions.length){ //we have not reached the end of the quiz
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            setShowResult(true); //reached the end -> show result
        }
    };

    //method to restart the quiz and all values to 0/false/null
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    //calculate passing grade
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 50;

    return (
        <div className="quiz-container">
            <div className="quiz-card">
                {showResult ? (
                    <div className="result-section">
                        <h2>
                            {passed ? "Quiz passed!" : "Quiz failed!"}
                        </h2>
                        <p>
                            Your score: {score} / {questions.length}
                        </p>
                        <p>
                            ({percentage.toFixed(0)}%) {/*return string representing user's score (fixed-point notation)*/}
                        </p>
                        {passed ? (
                            <p className="success-text">You passed the quiz!</p>
                        ) : (
                            <p className="fail-text">You need at least 50% to pass. Try again!</p>
                        )}

                        {passed ? (
                            <button onClick={() => navigate("/section2/theory")}>
                                Go to Section 2
                            </button>
                        ) : (
                            <button onClick={restartQuiz}>
                                Retry quiz
                            </button>
                        )}
                    </div>
                ) : (
                    <>
                        <h2>
                            Question {currentQuestion + 1} of {questions.length}
                        </h2>
                        <div className="question-section">
                            <p className="question-text">{questions[currentQuestion].question}</p>
                            {questions[currentQuestion].image && (
                                <img
                                    src={questions[currentQuestion].image}
                                    alt="Question visual"
                                    className="quiz-image"
                                />
                            )}
                        </div>

                        <div className="options">
                            {questions[currentQuestion].answers.map((answer, index)=>(
                                <button
                                    key={index}
                                    className={`option-btn ${
                                        selectedAnswer === answer ? "selected" : ""
                                }`}
                                    onClick={() => handleAnswerClick(answer)}
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>

                        <button
                            className="next-btn"
                            onClick={handleNext}
                            disabled={selectedAnswer === null}
                        >
                            Next
                        </button>
                    </>
                )}
            </div>
        </div>
    )

=======
    return <p>Quiz page</p>;
>>>>>>> 3342eab (quiz)
}

export default Quiz;