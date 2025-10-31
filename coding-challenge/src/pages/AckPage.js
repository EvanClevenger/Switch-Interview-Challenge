import "../index.css";
import logo from "../assets/logo_white.png";
import moonIcon from "../assets/moonIcon.png";
import sunIcon from "../assets/sunIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AcknowledgementPage({ isDark, setDark, activeTab, setTabActive }) {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (isChecked) {
      alert("Acknowledged! Thank you!");
      navigate("/");
    }
  };

  return (
    <>
      <div data-theme={isDark ? "dark" : "light"} className="page-wrapper">
        <header className="ack-page-header">
          <img src={logo} alt="logo" className="logo" />
          <div className="ack-header-options">
            {["Benefits", "Safety", "Policies"].map((tab, index) => (
              <p
                key={index}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => {
                  setTabActive(tab);
                  console.log("AckPage props:", { activeTab });
                }}>
                {tab}
              </p>
            ))}
            <img
              src={isDark ? sunIcon : moonIcon}
              alt="moon icon"
              className="toggle-icon"
              title="Click for dark mode"
              onClick={() => {
                setDark((prev) => !prev);
                console.log("dark mode clicked");
              }}
            />
          </div>
        </header>
        <div className="ack-body">
          <h1 className="ack-title">Acknowledgement</h1>
          <p className="ack-text">
            Please confirm that you've reviewed all benefits and policies.
          </p>
          <label className="ack-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}></input>
            I acknowledge and understand the information provided.
          </label>
          <button
            className="ack-button"
            onClick={handleConfirm}
            disabled={!isChecked}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default AcknowledgementPage;
