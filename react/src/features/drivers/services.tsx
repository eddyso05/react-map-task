import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { MapState } from "./interface";

export const fetchDrivers = createAsyncThunk<any, any, { state: MapState }>(
  "map/fetchDrivers",
  async (info: number, { getState }) => {
    const longitude = getState().root.map.longitude;
    const latitude = getState().root.map.latitude;
    const count = getState().root.map.count;

    const ProxyURL: String = "https://cors-anywhere.herokuapp.com/";
    const RequestURL: String = `https://qa-interview-test.splytech.dev/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`;

    const response = await axios.get(`${ProxyURL}${RequestURL}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;
    return data;
  }
);
