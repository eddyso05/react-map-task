import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../../Features/counter/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
