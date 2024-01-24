import { useState } from "react";
import "./styles/App.css";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  }
  const decrement = () => {
    if(count != 0) setCount(count-1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <>
      <h1>{count}</h1>
      <div className="controls">
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
