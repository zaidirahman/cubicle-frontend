import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import Careers from "./pages/Careers";
import BlogDetailPage from "./pages/BlogDetailPage";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login"
import Admin from "./pages/Admin";
import { jwtDecode } from 'jwt-decode';
import ScrollToTop from './utils/scrollToTop';
import ScrollToHash from './utils/ScrollToHash';
import MetaPixelListener from './utils/MetaPixel';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      if (token) {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setAuth(true);
        } else {
          localStorage.removeItem('token');
        }
      }
    } catch {
      localStorage.removeItem('token');
    }
  }, []);
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScrollToHash />
        <MetaPixelListener />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/admin" element={auth ? <Admin setAuth={setAuth} /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
