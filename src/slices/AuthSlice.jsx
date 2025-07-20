import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
    const updateUser = action.payload;

    state.user = updateUser;
    localStorage.setItem("user", JSON.stringify(updateUser));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(u => u.email === updateUser.oldEmail);
    if (userIndex !== -1) {
      users[userIndex] = updateUser;
      localStorage.setItem("users", JSON.stringify(users));
    }
    },
    loginSucces: (state, action) => {
      state.user = action.payload
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
    registerUser: (state,action) => {
      const users = JSON.parse(localStorage.getItem('users')) || []
      users.push(action.payload)
      localStorage.setItem("users", JSON.stringify(users))
    }
  },
});

export const { loginSucces, logout, registerUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
