import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AcknowledgementPage from "./pages/AckPage";
import { useState } from "react";

function App() {
  const [tabActive, setTabActive] = useState("Benefits");
  const [isDark, setDark] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              isDark={isDark}
              setDark={setDark}
              activeTab={tabActive}
              setTabActive={setTabActive}
            />
          }
        />
        <Route
          path="/AckPage"
          element={
            <AcknowledgementPage
              isDark={isDark}
              setDark={setDark}
              activeTab={tabActive}
              setTabActive={setTabActive}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
