import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { fetchDrivers } from "./services";
import { Drivers } from "../../interface";

export const driversAdapter = createEntityAdapter<Drivers>({
  selectId: (driver: Drivers) => driver.driver_id,
});

export const { selectAll: selectAllDrivers } = driversAdapter.getSelectors(
  (state: RootStateOrAny) => state.root.map.data.drivers
);

export const mapSlice = createSlice({
  name: "map",
  initialState: driversAdapter.getInitialState({
    location: "Singapore",
    longitude: 103.8522982,
    latitude: 1.285194,
    count: 15,
    zoom: 15,
    modal: false,
    loading: false,
    theme: "streets-v11",
    data: {
      drivers: null,
      pickETA: null,
    },
  }),
  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    setLocation: (state, action) => {
      state.location = action.payload[0];
      state.latitude = action.payload[1];
      state.longitude = action.payload[2];
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDrivers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDrivers.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchDrivers.fulfilled, (state, action) => {
      driversAdapter.setAll(state, action.payload.drivers);
      state.data.drivers = action.payload.drivers;
      state.data.pickETA = action.payload.pickup_eta;
      state.loading = false;
    });
  },
});

export const { toggleModal, setLocation, setTheme, setCount } =
  mapSlice.actions;

export default mapSlice.reducer;
