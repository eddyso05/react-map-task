import { combineReducers } from "@reduxjs/toolkit";

import mapReducer from "../../features/drivers/slice";

const rootReducer = combineReducers({
  map: mapReducer,
});

export default rootReducer;
