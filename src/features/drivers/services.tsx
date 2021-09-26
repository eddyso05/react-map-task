import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDrivers = createAsyncThunk(
  "map/fetchDrivers",
  async (info: any) => {
    const ProxyURL: String = "https://cors-anywhere.herokuapp.com/";
    const RequestURL: String = `https://qa-interview-test.splytech.dev/api/drivers?latitude=${info[0]}&longitude=${info[1]}&count=${info[2]}`;
    const response = await axios.get(`${ProxyURL}${RequestURL}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = response;
    return data;
  }
);
