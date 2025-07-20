import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import 'swiper/css';
import 'swiper/css/pagination';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoritPage from './pages/FavoritPage'
import SearchPage from './pages/SearchPage'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DetailPage from './pages/DetailPage';
import LoginForm from "./pages/LoginPage";
import RegisterForm from "./pages/RegisterPage";
import PrivateRoute from './components/PrivatRoute';
import UpdateUser from './pages/UpdatePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import SectionWrapper from './components/SectionWrapper';




export default function App() {
  useEffect(() => {
    AOS.init({
       duration: 1500,
  delay: 300,
  once: true      
    });
  }, []);

  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
        <AnimatePresence>
          <SectionWrapper>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<HomePage />} />

            <Route 
              path="/search" 
              element={
              <PrivateRoute>
                <SearchPage />
              </PrivateRoute>
              } 
            />

            <Route 
              path="/favorites" 
              element={
              <PrivateRoute>
                <FavoritPage />
              </PrivateRoute>
              } 
              />

            <Route 
              path="/updateUser" 
              element={
              <PrivateRoute>
                <UpdateUser />
              </PrivateRoute>
              } 
              />

            <Route path="/detail/:modelId" 
            element={
            <PrivateRoute>
              <DetailPage />
            </PrivateRoute>
            } 
            />
          </Routes>
          </SectionWrapper>
        </AnimatePresence>
      <Footer />
    </div>
  );
}
