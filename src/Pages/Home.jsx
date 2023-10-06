import React, { useEffect, useState } from "react";
import Tallycounter from "./Tallycounter";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if userEmail is present in local storage
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      navigate("/register");
    }
  }, []);

  const [counters, setCounters] = useState([1]); // Initialize with one counter

  const addCounter = () => {
    const newCounters = [...counters, counters.length + 1];
    setCounters(newCounters);
  };
  const Logout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };
  const removeCounter = (counterId) => {
    const updatedCounters = counters.filter((counter) => counter !== counterId);
    setCounters(updatedCounters);
  };
  return (
    <div>
      <button className="add-button" onClick={addCounter}>
        Add Tallycounter
      </button>
      <button className="add-button" onClick={Logout}>
        Logout
      </button>
      <div className="counter-grid">
        {counters.map((counter, index) => (
          <div className="counter-item" key={counter}>
            <button className="remove" onClick={() => removeCounter(counter)}>
              x
            </button>
            <Tallycounter index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
