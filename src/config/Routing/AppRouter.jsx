import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAndSignup from "../../assets/Screens/LoginAndSignup";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
