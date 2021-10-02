import { combineReducers } from "@reduxjs/toolkit";

import mapReducer from "../../features/drivers/slice";
import userReducer from "../../features/user/slice";

const rootReducer = combineReducers({
  map: mapReducer,
  user: userReducer,
});

export default rootReducer;
