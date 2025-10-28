import "./index.css";
import logo from "./logo_white.png";
import { useEffect, useState } from "react";

function App() {
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tabActive, setTabActive] = useState("Benefits");

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
    </>
  );
}

export default App;
