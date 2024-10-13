import { createSlice } from "@reduxjs/toolkit";

const mangaSlice = createSlice({
  name: "manga",
  initialState: {
    mangaList: [],
    selectedManga: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchMangaStart: (state) => {
      state.loading = true;
    },
    fetchMangaSuccess: (state, action) => {
      state.loading = false;
      state.mangaList = action.payload;
    },
    fetchMangaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectManga: (state, action) => {
      state.selectedManga = action.payload;
    },
  },
});

export const {
  fetchMangaStart,
  fetchMangaSuccess,
  fetchMangaFailure,
  selectManga,
} = mangaSlice.actions;

export default mangaSlice.reducer;
