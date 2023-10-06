// src/tallySlice.js
import { createSlice } from "@reduxjs/toolkit";

const tallySlice = createSlice({
  name: "tally",
  initialState: {
    number: 0,
    inputNumber: 0,
    inputName: "",
    name: "Tally Counter",
    showNameInput: false,
    showNumberInput: false,
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      if (state.number > 0) {
        state.number -= 1;
      }
    },
    setShowNameInput: (state) => {
      state.showNameInput = true;
    },
    setShowNumberInput: (state) => {
      state.showNumberInput = true;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    reset: (state) => {
      state.name = "Tally Counter";
      state.number = 0;
      state.showNameInput = false;
      state.showNumberInput = false;
      state.inputName = "";
      state.inputNumber = "";
    },
    setInputName: (state, action) => {
      state.inputName = action.payload;
    },
    setInputNumber: (state, action) => {
      state.inputNumber = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  setShowNameInput,
  setShowNumberInput,
  setNumber,
  setName,
  reset,
  setInputName,
  setInputNumber,
} = tallySlice.actions;

export default tallySlice.reducer;
