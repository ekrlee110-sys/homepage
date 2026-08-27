import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import AdminResetPassword from './pages/AdminResetPassword';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
 <Route path="/admin/login" element={<AdminLogin />} />
 <Route path="/admin/reset-password" element={<AdminResetPassword />} />       
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
