import {useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import './Register.css';
import {Link, useNavigate} from "react-router-dom";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();
    const timeout = 1500;
    const useEffectTimeout = 3000;

    const onSubmit = async (data) => {
        try{
            const res = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password
                })
            });
            const result = await res.json();

            if(res.ok){
                setStatus("success");
                setMessage("Account created successfully!");

                setTimeout(() => navigate("/login"), timeout);
            }
            else{
                setStatus("error");
                setMessage(result.message || "Registration failed");
            }
        }
        catch {
            setStatus("error");
            setMessage("Server error");
        }
    };

    useEffect(() => {
        if(!message)
            return;
        const timer = setTimeout(() => {
            setMessage(null);
            setStatus(null);
        }, useEffectTimeout);
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
                        placeholder="First Name"
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName && <span className="error">First name is mandatory</span>}

                    <input
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName && <span className="error">Last name is mandatory</span>}

                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="error">{errors.email.message || "Email is mandatory"}</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 5,
                                message: "Password must be at least 5 characters"
                            }
                        })}
                    />
                    {errors.password && <span className="error">{errors.password.message || "Password is mandatory"}</span>}

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