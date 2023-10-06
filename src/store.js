// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import tallyReducer from "./redux";

const store = configureStore({
  reducer: {
    tally: tallyReducer, // This is the reducer for your Tallycounter component
  },
});

export default store;
