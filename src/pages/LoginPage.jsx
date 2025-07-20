// src/pages/LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSucces } from "../slices/AuthSlice";
import { loadFavorites } from "../slices/FavoriteSlice";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigation = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || []
    const found = users.find((u) => u.email === email && u.password === password);
    if(!found) return alert("Email atau password salah")
    
    dispatch(loginSucces(found))
    dispatch(loadFavorites());
    navigation("/")
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-md w-full space-y-8 p-8  rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Masuk ke Akun Anda</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Kata Sandi</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded"
          >
            Masuk
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
