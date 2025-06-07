import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
