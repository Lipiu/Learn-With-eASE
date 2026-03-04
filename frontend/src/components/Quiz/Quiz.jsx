import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Quiz.css";

function Quiz({quizNumber, questions, nextSection }){
    const [currentQuestion, setCurrentQuestion] = useState(0); // which question the user is currently on

    //so that the quiz1questions get shuffled when the quiz is refreshed
    const [shuffleQuestions, setShuffleQuestions] = useState(() =>
        [...questions].sort(() => Math.random() - 0.5));
    const [selectedAnswer, setSelectedAnswer] = useState(null); // user's selected answer
    const [score, setScore] = useState(0); // keeps track of how many correct answers the user currently has
    const [showResult, setShowResult] = useState(false); // checks whether the quiz is finished and displays result

    const navigate = useNavigate(); // we use 'useNavigate' to redirect the user to /section2/theory if score > 50%

    useEffect(() => {
        const token = localStorage.getItem("token");
        //check localStorage for a token
        if(!token){
            return; //no need if the user is not logged in
        }

        const fetchQuiz = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/quiz/results", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if(response.ok){
                    const results = await response.json();
                    const thisQuizResult = results.filter(r => r.quizNumber === quizNumber)
                    if(thisQuizResult.length > 0){
                        const lastResult = thisQuizResult[thisQuizResult.length - 1]; //get latest result
                        setScore(lastResult.score);
                        setShowResult(true);
                    }
                }
                else{
                    console.warn("Failed to fetch saved quiz:", await response.text());
                }
            }
            catch(err){
                console.error("Error fetching quiz:", err);
            }
        }
        fetchQuiz();
    }, [quizNumber]);

    //here we save user answer and store it in selectedAnswer
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNext = async () => {
        let newScore = score;
        if(selectedAnswer.isCorrect){ //if user answer is correct we increment the score
            newScore += 1;
        }
        setScore(newScore);
        setSelectedAnswer(null); //reset selected to null

        if(currentQuestion + 1 < shuffleQuestions.length){ //we have not reached the end of the quiz
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            setShowResult(true); //reached the end -> show result

            const token = localStorage.getItem("token");
            if(token){
                try{
                    const response = await fetch("http://localhost:8080/api/quiz/submitted", { //here /submitted is the endpoint to send completed quiz to backend
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            quizNumber: quizNumber,
                            score: newScore,
                            totalQuestions: shuffleQuestions.length
                        })
                    });
                    if(response.ok){
                        console.log("Quiz result saved!");
                    }
                    else{
                        console.warn("Failed to save quiz:", await response.text());
                    }
                }
                catch(err){
                    console.error("Error submitting the quiz:", err);
                }
            }
        }
    };

    //method to restart the quiz and all values to 0/false/null
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setShuffleQuestions([...questions].sort(() => Math.random() - 0.5));
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

                        {passed && nextSection && (
                            <div className="button-container next-section-container">
                                <button className="next-section-btn" onClick={() => navigate(nextSection)}>
                                    {nextSection ==="/congratulations" ? "See your results" : `Go to section ${quizNumber + 1}`}
                                </button>
                            </div>
                        )}
                        <div className="button-container retry-container">
                            <button className="retry-btn" onClick={restartQuiz}>
                                Retry quiz
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>
                            Question {currentQuestion + 1} of {shuffleQuestions.length}
                        </h2>
                        <div className="question-section">
                            <p className="question-text">{shuffleQuestions[currentQuestion].question}</p>
                            {shuffleQuestions[currentQuestion].image && (
                                <img
                                    src={shuffleQuestions[currentQuestion].image}
                                    alt="Question visual"
                                    className="quiz-image"
                                />
                            )}
                        </div>

                        <div className="options">
                            {shuffleQuestions[currentQuestion].answers.map((answer, index)=>(
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
}

export default Quiz;