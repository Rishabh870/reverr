import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setNumber, setName, reset } from "../redux";
const Tallycounter = ({ index }) => {
  const [showNameInput, setShowNameInput] = useState(false);
  const [showNumberInput, setShowNumberInput] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const { number, name } = useSelector((state) => state.tally.tally[index]);

  const dispatch = useDispatch();

  // Function to handle increment
  const handleIncrement = () => {
    dispatch(increment({ index }));
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (number > 0) {
      dispatch(decrement({ index }));
    }
  };

  const handleSetNumber = () => {
    if (numberInput === "" || numberInput < 0) {
      return;
    }
    dispatch(setNumber({ index, value: numberInput }));
  };

  const handleReset = () => {
    dispatch(reset({ index }));
    setNameInput("");
    setNumberInput("");
    setShowNameInput(false);
    setShowNumberInput(false);
  };

  const handleSetName = () => {
    if (nameInput === "") {
      return;
    }
    dispatch(setName({ index, value: nameInput }));
  };

  const handleShowNameInput = () => {
    setShowNameInput(true);
  };

  const handleShowNumberInput = () => {
    setShowNumberInput(true);
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
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
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
              <input
                type="number"
                value={numberInput}
                onChange={(e) => setNumberInput(e.target.value)}
              />
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
