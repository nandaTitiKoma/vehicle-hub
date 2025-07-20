import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../slices/AuthSlice";

export default function UpdateUser(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const oldEmail = user.email

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { ...user, name, email, password, oldEmail };
    dispatch(updateUser(updated));
    alert("Profil berhasil diperbarui!");
    navigate("/favorites");
  };
    return(
    <div className="min-h-screen text-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profil</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Kata Sandi</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
    )
}