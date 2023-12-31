import React, { useState } from "react";
import "../App.css"; // Import your CSS file for styling
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <input
            className="login-input"
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password [more then 6 letters]"
            required
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Register
        </button>
        <div style={{ marginTop: "10px" }}>
          <Link className="link-style" to="/login" type="submit">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
