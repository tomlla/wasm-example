import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import init, { add } from "wasm-example";

import { Link } from "react-router-dom";

let initializerCalled: boolean = false;
const wasmInit = async () => {
  if (!initializerCalled) {
    initializerCalled = true;
    // ここで
    // http://localhost:3000/@fs/<Path to the project root dir>/pkg/wasm_example_bg.wasm
    // からwasm file を取得している模様
    await init();
    console.log("wasm initialized");
  }
};

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    wasmInit();
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
