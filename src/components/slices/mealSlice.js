import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainIngredient: "",
  areaName: "",
  letter: "",
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMainIngredient: (state, action) => {
      state.mainIngredient = action.payload;
    },
    setArea: (state, action) => {
      state.areaName = action.payload;
    },
    setLetter: (state, action) => {
      state.letter = action.payload;
    },
  },
});

export const { setMainIngredient, setArea, setLetter } = mealSlice.actions;
export default mealSlice.reducer;
