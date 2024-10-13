import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    userInfo: null,
    favorites: [],
  },
  reducers: {
    logIn: (state, action) => {
      (state.loggedIn = true), (state.userInfo = action.payload);
    },
    logOut: (state) => {
      (state.loggedIn = false), (state.userInfo = null), (state.favorites = []);
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (manga) => manga.id !== action.payload
      );
    },
  },
});

export const { logIn, logOut, addToFavorites, removeFromFavorites } =
  userSlice.actions;

export default userSlice.reducer;
