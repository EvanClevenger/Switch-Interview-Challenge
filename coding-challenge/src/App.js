import "./index.css";
import logo from "./assets/logo_white.png";
import { useEffect, useState } from "react";
import moonIcon from "./assets/moonIcon.png";
import sunIcon from "./assets/sunIcon.png";

function App() {
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tabActive, setTabActive] = useState("Benefits");
  const [isDark, setDark] = useState(false);

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

  return (
    <>
      <div data-theme={isDark ? "dark" : "light"}>
        {
          <header className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="header-options">
              {["Benefits", "Safety", "Policies"].map((tab, index) => (
                <p
                  key={index}
                  className={`tab ${tabActive === tab ? "active" : ""}`}
                  onClick={() => setTabActive(tab)}>
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
      </div>
    </>
  );
}

export default App;
