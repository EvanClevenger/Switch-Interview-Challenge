import "./index.css";
import logo from "./logo_white.png";
import { useEffect, useState } from "react";

function App() {
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

  return (
    <>
      {
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <div className="header-options">
            <p>Benefits</p>
            <p>Safety</p>
            <p>Policies</p>
          </div>
        </header>
      }
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        benefitsData.map((data, index) => {
          return (
            <div className="App" key={index}>
              <div className="benefits-cards">
                <ul>
                  <li className="card-header">{data.title}</li>
                  <li className="card-paragraph">{data.description}</li>
                </ul>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
