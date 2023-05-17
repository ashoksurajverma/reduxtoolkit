import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./redux/reducers/count.reducer";

const store = configureStore({
  reducer: {
    countReducer,
  },
});

export default store;
