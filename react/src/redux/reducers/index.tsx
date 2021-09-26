import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../../features/counter/counterSlice";
import mapReducer from "../../features/drivers/slice";

const rootReducer = combineReducers({
  counter: counterReducer,
  map: mapReducer,
});

export default rootReducer;
