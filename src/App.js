import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import SidePanel from './components/SidePanel';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);

  return (
    <Router>
    <div className="App">
      <Banner />
      <div className="d-flex" style={{ height: '100vh' }}>
        <SidePanel onLoginClick={handleLoginClick} />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/login" element={<div className="w-100"> <LoginForm showLogin={showLogin} /></div>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
