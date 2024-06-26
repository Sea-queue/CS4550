// import { modules } from "../../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // modules: modules,
  modules: [{ _id: -1 }],
  module: {
    _id: -1,
    name: "New Module",
    description: "New Module Description",
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    // addModule: (state, action) => {
    //   state.modules = [
    //     { ...action.payload, _id: new Date().getTime().toString() },
    //     ...state.modules,
    //   ];
    // },

    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },

    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      console.log("update m", action.payload);
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
