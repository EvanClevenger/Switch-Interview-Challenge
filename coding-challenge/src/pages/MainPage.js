import "../index.css";
import logo from "../assets/logo_white.png";
import { useEffect, useState } from "react";
import moonIcon from "../assets/moonIcon.png";
import sunIcon from "../assets/sunIcon.png";
import { useNavigate } from "react-router-dom";
import "./AckPage";

function MainPage({ isDark, setDark, activeTab, setTabActive }) {
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await fetch("/benefits.json");
        const data = await response.json();
        setBenefitsData(data.benefits);
        //benefits.json is an object! not an array of objects
        if (!response.ok) {
          throw new Error("could not fetch benefits data");
        }
      } catch (error) {
        console.error(`There was an error fetching: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBenefits();
  }, []);

  const navigate = useNavigate();

  console.log("App state:", { activeTab, isDark });

  return (
    <>
      <div data-theme={isDark ? "dark" : "light"} className="page-wrapper">
        {
          <header className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="header-options">
              {["Benefits", "Safety", "Policies"].map((tab, index) => (
                <p
                  key={index}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => {
                    setTabActive(tab);
                    console.log(`active Tab : ${activeTab} `);
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
        }
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="benefits-cards">
            {benefitsData.map((data, index) => (
              <div className="card" key={index}>
                <div className="card-header">{data.title}</div>
                <div className="card-paragraph">{data.description}</div>
              </div>
            ))}
          </div>
        )}
        <footer className="footer-container">
          <p className="footer-next" onClick={() => navigate("/AckPage")}>
            <span className="underline-on-hover">Next</span> ➡️
          </p>
        </footer>
      </div>
    </>
  );
}
export default MainPage;
