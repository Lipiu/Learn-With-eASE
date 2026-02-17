import React, {useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState(null);

    const navigate = useNavigate();

    //only temporary for testing
    //checks if an account exists (statically)
    const onSubmit = async (data) => {
        try{
            const res = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            });

            const result = await res.json();

            if(res.ok){
                localStorage.setItem("token", result.token);
                setStatus("success");
                setMessage("Logged in successfully!");

                setTimeout(() => navigate("/account"), 1000);
            }
            else{
                setStatus("error");
                setMessage("Server Error");
            }
        }
            // eslint-disable-next-line no-unused-vars
        catch(err){
            setStatus("error");
            setMessage("Server error")
        }
    };

    useEffect(() => {
        if(!message)
            return;
        const timer = setTimeout(() => {
            setMessage(null);
            setStatus(null);
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>

                {message && (
                    <div className={`notification ${status}`}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="error">Email is mandatory</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="error">Password is mandatory</span>}
                    <button type="submit">Login</button>
                    <div className="auth-message">
                        <span>Don't have an account? </span>
                        <Link to="/register" className="sign-in">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;