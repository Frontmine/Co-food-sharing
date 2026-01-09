import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import GroupPage from './pages/GroupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/group" element={<GroupPage />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
