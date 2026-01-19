import React, {useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import './Register.css';
import {Link} from "react-router-dom";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState(null);

    const onSubmit = (data) => {
        const existingUser = JSON.parse(localStorage.getItem(data.email));
        if (existingUser) {
            setStatus("error");
            setMessage("An account with this email already exists.")
            return;
        } else {
            const userData = {
                name: data.name,
                email: data.email,
                password: data.password,
            };
            localStorage.setItem(data.email, JSON.stringify(data));
            setStatus("success");
            setMessage("Account created successfully!");
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
        <div className="register-page">
            <div className="register-card">
                <h2>Register</h2>

                {message && (
                    <div className={`notification ${status}`}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="error">Name is mandatory</span>}

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
                    <button type="submit">Create account</button>
                    <div className="auth-message">
                        <span>Already have an account? </span>
                        <Link to="/login" className="sign-in">
                             Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;