// src/pages/RegisterForm.jsx
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../slices/AuthSlice";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigation = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)){
      alert("email telah digunakam")
      return;
    }

    const newUser = {name, email, password}
    dispatch(registerUser(newUser))
    alert("Registerasi Berhasil")
    navigation("/login")
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-md w-full space-y-8 p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Daftar Akun Baru</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Nama Lengkap</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            Daftar
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
