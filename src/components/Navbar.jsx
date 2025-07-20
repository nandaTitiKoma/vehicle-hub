import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../asset/logo.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Beranda", to: "/" },
    { label: "Cari", to: "/search" },
    { label: "Favorit", to: "/favorites" },
    { label: "Edit", to: "/updateUser" }
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50  backdrop-blur-md shadow-md">
      <nav className="flex items-center justify-between px-4 py-4 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <img src={logo} className="h-10 w-auto mr-4" alt="Logo" />
          {user && (
            <span className="text-white font-medium hidden sm:inline">Hai, {user.name}</span>
          )}
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="hidden lg:flex lg:gap-x-10 mr-5">
          {navItems.map(({ label, to }, index) => (
            <NavLink
              key={index}
              to={to}
              className={({ isActive }) =>
                `group relative text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-indigo-400" : "text-white hover:text-indigo-300"
                }`
              }
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-400 transition-all duration-300 ${
                  location.pathname === to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </NavLink>
          ))}
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold text-white hover:text-indigo-300 transition"
            >
              Logout <span aria-hidden="true">→</span>
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? "text-indigo-400" : "text-white hover:text-indigo-300"
                }`
              }
            >
              Login →
            </NavLink>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-transparent px-4 pb-4 space-y-3"
          >
            {user && (
              <p className="text-white text-sm pt-2">Hai, {user.name}</p>
            )}
            {navItems.map(({ label, to }, index) => (
              <NavLink
                key={index}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-indigo-300 text-sm font-medium"
              >
                {label}
              </NavLink>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="block text-left w-full text-white hover:text-red-400 text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-indigo-300 text-sm font-medium"
              >
                Login
              </NavLink>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
