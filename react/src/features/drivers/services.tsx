import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { MapState } from "./interface";

export const fetchDrivers = createAsyncThunk<any, any, { state: MapState }>(
  "map/fetchDrivers",
  async (info: number, { getState }) => {
    const longitude = getState().root.map.longitude;
    const latitude = getState().root.map.latitude;
    const count = getState().root.map.count;

    const BaseURL: String = `http://localhost:8080/api/v1/`;

    const response = await axios.get(
      `${BaseURL}drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = response;
    return data;
  }
);
