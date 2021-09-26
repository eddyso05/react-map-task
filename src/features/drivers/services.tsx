import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDrivers = createAsyncThunk("map/fetchDrivers", async () => {
  const ProxyURL = "https://cors-anywhere.herokuapp.com/";

  const response = await axios.get(
    `${ProxyURL}https://qa-interview-test.splytech.dev/api/drivers`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const { data } = response;
  return data;
});
