import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { fetchDrivers } from "./services";

interface Drivers {
  driver_id: string;
  location: {
    latitde: number;
    longtitude: number;
    bearing: number;
  };
}

export const driversAdapter = createEntityAdapter<Drivers>({
  selectId: (driver: Drivers) => driver.driver_id,
});

export const { selectAll: selectAllDrivers } = driversAdapter.getSelectors(
  (state: any) => state.map
);

export const mapSlice = createSlice({
  name: "map",
  initialState: driversAdapter.getInitialState({
    longtitude: 103.8522982,
    latitude: 1.285194,
    zoom: 15,
    modal: false,
    data: {
      drivers: null,
      pickETA: null,
    },
  }),
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDrivers.fulfilled, (state, action) => {
      driversAdapter.setAll(state, action.payload.drivers);
      state.data.drivers = action.payload.drivers;
      state.data.pickETA = action.payload.pickup_eta;
    });
  },
});

export const { toggleModal } = mapSlice.actions;

export default mapSlice.reducer;
