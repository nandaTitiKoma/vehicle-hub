import { createSlice } from "@reduxjs/toolkit";

const getUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.email;
};

const loadFavoritesFromLocalStorage = () => {
  const email = getUserEmail();
  if (!email) return [];
  return JSON.parse(localStorage.getItem(`favorites-${email}`)) || [];
};

const saveFavoritesToLocalStorage = (items) => {
  const email = getUserEmail();
  if (!email) return;
  localStorage.setItem(`favorites-${email}`, JSON.stringify(items));
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find((item) => item.Model_ID === action.payload.Model_ID);
      if (!exists) {
        state.items.push(action.payload);
        saveFavoritesToLocalStorage(state.items);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.Model_ID !== action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
    clearFavorites: (state) => {
      state.items = [];
      saveFavoritesToLocalStorage([]);
    },
    loadFavorites: (state) => {
      state.items = loadFavoritesFromLocalStorage();
    }
  },
});

export const { addFavorite, removeFavorite, clearFavorites, loadFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
