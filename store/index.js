import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./slices/mangaSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    manga: mangaReducer,
    user: userReducer,
  },
});

export default store;
