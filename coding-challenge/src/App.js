import "./index.css";
import logo from "./logo_white.png";

function App() {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="header-options">
          <p>Benefits</p>
          <p>Safety</p>
          <p>Policies</p>
        </div>
      </header>
      <div className="benefits-cards">
        <ul>
          <li className="card-header">PPO Plan</li>
          <li className="card-paragraph">{loremIpsum}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
