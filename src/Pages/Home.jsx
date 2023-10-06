import React, { useEffect, useState } from "react";
import Tallycounter from "./Tallycounter";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTally, removeTally } from "../redux";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if userEmail is present in local storage
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      navigate("/register");
    }
  }, []);

  // Initialize with one counter
  const counter = useSelector((state) => state.tally.tally);
  const dispatch = useDispatch();
  const addCounter = () => {
    dispatch(addTally());
  };

  const removeCounter = (index) => {
    dispatch(removeTally({ index }));
  };

  const Logout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
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
        {counter.map((_, index) => (
          <div className="counter-item" key={index}>
            <button
              className="remove"
              onClick={() => {
                removeCounter(index);
              }}
            >
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
