// src/tallySlice.js
import { createSlice } from "@reduxjs/toolkit";

const tallySlice = createSlice({
  name: "tally",
  initialState: {
    tally: [
      {
        number: 0,
        inputNumber: 0,
        inputName: "",
        name: "Tally Counter",
        showNameInput: false,
        showNumberInput: false,
      },
    ],
  },
  reducers: {
    addTally: (state, action) => {
      state.tally.push({
        number: 0,
        inputNumber: 0,
        inputName: "",
        name: "Tally Counter",
        showNameInput: false,
        showNumberInput: false,
      });
    },
    increment: (state, action) => {
      console.log(action.payload);
      const index = action.payload.index;
      state.tally[index].number += 1;
    },
    decrement: (state, action) => {
      const index = action.payload.index;

      if (state.tally[index].number > 0) {
        state.tally[index].number -= 1;
      }
    },
    setNumber: (state, action) => {
      const index = action.payload.index;
      state.tally[index].number = action.payload.value;
    },
    setName: (state, action) => {
      const index = action.payload.index;
      state.tally[index].name = action.payload.value;
    },
    reset: (state, action) => {
      const index = action.payload.index;
      state.tally[index].name = "Tally Counter";
      state.tally[index].number = 0;
      state.tally[index].showNameInput = false;
      state.tally[index].showNumberInput = false;
      state.tally[index].inputName = "";
      state.tally[index].inputNumber = "";
    },
    removeTally: (state, action) => {
      state.tally.splice(action.payload.index, 1);
    },
  },
});

export const {
  addTally,
  increment,
  decrement,
  setNumber,
  setName,
  reset,
  removeTally,
} = tallySlice.actions;

export default tallySlice.reducer;
