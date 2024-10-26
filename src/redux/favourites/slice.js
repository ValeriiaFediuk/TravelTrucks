import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: { items: [] },
  reducers: {
    toggleFavourite(state, action) {
      const truckId = action.payload;
      const index = state.items.indexOf(truckId);
      if (index !== -1) {
        state.items.splice(index, 1); 
      } else {
        state.items.push(truckId); 
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
