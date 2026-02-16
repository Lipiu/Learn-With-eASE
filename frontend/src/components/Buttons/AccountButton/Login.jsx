import React, {useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import './Login.css';
import {Link} from "react-router-dom";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState(null);

    //only temporary for testing
    //checks if an account exists (statically)
    const onSubmit = (data) => {
        const existingUser = JSON.parse(localStorage.getItem(data.email));
        if (!existingUser) {
            setStatus("error");
            setMessage("No account related to this email.")
            return;
        }
        if(existingUser.password !== data.password){
            setStatus("error");
            setMessage("Incorrect password");
            return;
        }

        setStatus("success");
        setMessage("Logged in successfully!");
        localStorage.setItem("loggedInUser", data.email);
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