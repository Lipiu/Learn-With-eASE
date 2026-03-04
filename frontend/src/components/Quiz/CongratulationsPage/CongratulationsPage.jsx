import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function CongratulationsPage(){
    const[verified, setVerified] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/");
            return;
        }
        fetch("http://localhost:8080/api/quiz/results", {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(results => {
                const allPassed = [1,2,3,4,5,6].every(num => results.some(r => r.quizNumber === num && r.passed));
                    if(allPassed){
                        setVerified(true);
                    }
                    else{
                        navigate("/")
                    }
            })
            .catch(() => navigate("/"));
    }, []);

    if(verified === null){
        return <p>Loading...</p>
    }
    return(
        <div>
        <h1>Congratulations!</h1>
        <p>You have completed all quizzes!</p>
        </div>
    );
}

export default CongratulationsPage;