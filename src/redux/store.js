import { configureStore } from "@reduxjs/toolkit";
import { data } from "./createApi/data";
const store = configureStore({
  reducer: {
    [data.reducerPath]: data.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(data.middleware),
});

export default store;
