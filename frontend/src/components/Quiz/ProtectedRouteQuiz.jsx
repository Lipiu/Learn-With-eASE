import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function ProtectedRouteQuiz({quizNumber, children}){
    const [allowed, setAllowed] = useState(null);

    useEffect(() => {
        // always allow quiz 1
        if(quizNumber === 1){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAllowed(true); //quiz 1 is always accessible
            return;
        }

        const token = localStorage.getItem("token");
        if(!token){
            setAllowed(false);
            return;
        }
        fetch("http://localhost:8080/api/quiz/results", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(results => {
                //check if the previous quiz is solved AND passed
                const previousPassed = results.some(
                    r=>r.quizNumber === quizNumber - 1 && r.passed
                );
                setAllowed(previousPassed);
            })
            .catch(()=>setAllowed(false))
    }, [quizNumber]);

    if(allowed === null)
        return <p>Loading...</p>
    if(!allowed)
        return <Navigate to="/quiz-locked" state={{ quizNumber }} replace/>
    return children;
}

export default ProtectedRouteQuiz;