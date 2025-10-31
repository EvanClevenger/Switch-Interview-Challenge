import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AckPage from "./pages/AckPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AckPage" element={<AckPage />} />
      </Routes>
    </Router>
  );
}

export default App;
