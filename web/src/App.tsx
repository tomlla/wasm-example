import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import init, { add } from "wasm-example";

import { Link } from "react-router-dom";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      await init();
      console.log("wasm initialized");
    })();
  }, []);

  const inc = () => {
    const newValue = add(count, 1);
    setCount(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/example"> example </Link>
        <p>
          <span>count is: {count}</span>
          <button type="button" onClick={inc}>
            +1
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
};
