import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom"; // Updated import
import axios from "axios";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Updated to useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/loginUser", {
                userName,
                userPassword,
            });

            const { token, user } = response.data;

            localStorage.setItem("token", token);

            if (user.userType === "Admin") {
                navigate("/dashboard");
            } else if (user.userType === "User") {
                navigate("/dashboardUser");
            }
        } catch (err) {
            setError(err.response?.data?.error || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div class="form-container">
                <p class="title">Delma Mount View</p>
                <form class="form" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                        </div>

                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />
                        </div>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button class="sign" type="submit">Login</button>
                </form>

                <div class="signup-box">
                    <p class="signup">Don't have an account?
                        <a rel="noopener noreferrer" href="#" class="">Sign up</a>
                    </p>
                </div>

            </div>
        </div>

    );
};

export default Login;