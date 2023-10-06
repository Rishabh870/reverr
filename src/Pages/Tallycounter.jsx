import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  setShowNameInput,
  setShowNumberInput,
  setNumber,
  setName,
  reset,
  setInputName,
  setInputNumber,
} from "../redux";
const Tallycounter = ({ index }) => {
  const {
    number,
    inputNumber,
    inputName,
    name,
    showNameInput,
    showNumberInput,
  } = useSelector((state) => state.tally);
  const dispatch = useDispatch();

  // Function to handle increment
  const handleIncrement = () => {
    dispatch(increment());
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (number > 0) {
      dispatch(decrement());
    }
  };

  const handleShowNameInput = () => {
    dispatch(setShowNameInput());
  };

  const handleShowNumberInput = () => {
    dispatch(setShowNumberInput());
  };
  const handleSetNumber = () => {
    dispatch(setNumber(inputNumber));
  };

  const handleSetName = () => {
    dispatch(setName(inputName));
  };
  const handleSetInputName = (e) => {
    // Dispatch action to set inputName
    dispatch(setInputName(e.target.value));
  };
  const handleSetInputNumber = (e) => {
    // Dispatch action to set inputName
    dispatch(setInputNumber(e.target.value));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div>
        <p className="title">{name}</p>
      </div>
      <div>
        <input type="text" className="display" disabled value={number} />
        <div className="add-sub-container">
          <button className="style-button" onClick={handleDecrement}>
            -
          </button>
          <button className="style-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      <div>
        <div>
          <button className="set-button" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div>
          {showNameInput ? (
            <div className="input-container">
              <input
                type="text"
                value={inputName}
                onChange={handleSetInputName}
              />
              <button className="style-button" onClick={handleSetName}>
                Set
              </button>
            </div>
          ) : (
            <button className="set-button" onClick={handleShowNameInput}>
              Name
            </button>
          )}
        </div>
        <div>
          {showNumberInput ? (
            <div className="input-container">
              {" "}
              <input
                type="number"
                value={inputNumber}
                onChange={handleSetInputNumber}
              />{" "}
              <button className="style-button" onClick={handleSetNumber}>
                Set
              </button>
            </div>
          ) : (
            <button className="set-button" onClick={handleShowNumberInput}>
              Number
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tallycounter;
