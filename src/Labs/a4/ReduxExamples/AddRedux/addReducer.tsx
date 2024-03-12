import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sum: 0,
};

const addSlice = createSlice({
  name: "add",
  // if the object name and the instance have the same name, they can be collapsed to below,
  // it's the same as initialState: initialState or initialState : {...}
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum = action.payload.c + action.payload.b;
    },
  },
});

export const { add } = addSlice.actions;
export default addSlice.reducer;
