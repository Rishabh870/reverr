import React, { useState } from "react";
import "../App.css"; // Import your CSS file for styling
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userEmail", email);
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {
      // Handle registration error
      console.error("Registration Error:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            className="login-input"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            className="login-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <div style={{ marginTop: "10px" }}>
          <Link className="link-style" to="/register" type="submit">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
