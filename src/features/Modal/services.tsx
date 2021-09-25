import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const incrementAsync = createAsyncThunk(
  "map/fetchDriver",
  async (latitude: number, longtitude: number, drivers: number) => {
    const response = await fetchCount(latitude);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
