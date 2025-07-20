import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/FavoriteSlice";
import authReducer from "./slices/AuthSlice"
import selectedSlice from "./slices/SelectedVehicle"

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    auth: authReducer,
    selected: selectedSlice
  },
});
