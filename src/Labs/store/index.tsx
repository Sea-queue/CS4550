import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/ConterRedux/counterReducer";

export interface LabState {
  helloReducer: {
    message: string;
  };
  counterReducer: { count: number };
}

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
  },
});

export default store;
