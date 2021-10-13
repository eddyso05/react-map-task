import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    longitude: null,
    latitude: null,
    accuracy: null,
    infoModal: false,
    SingaporeDistance: null,
    LondonDistance: null,
    nearestOffice: null,
  },
  reducers: {
    setLocation: (state, action) => {
      state.longitude = action.payload[0];
      state.latitude = action.payload[1];
      state.accuracy = action.payload[2];
      state.SingaporeDistance = action.payload[3];
      state.LondonDistance = action.payload[4];
      state.nearestOffice = action.payload[5];
    },
    toggleInfoModal: (state) => {
      state.infoModal = !state.infoModal;
    },
  },
});

export const { setLocation, toggleInfoModal } = userSlice.actions;
export default userSlice.reducer;
