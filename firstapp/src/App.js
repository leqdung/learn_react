import logo from "./logo.svg";
import "./App.css";
import Car from "./Car.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Author: Le quang dung
        </a>
      </header>
    </div>
  );
}

export default App;
