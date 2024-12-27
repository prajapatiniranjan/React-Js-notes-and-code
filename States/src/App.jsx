import { useState } from "react";
import Button from "./Button.jsx"; 

function App() {
  let [count, setCounter] = useState(0);

  function add() {
    setCounter(count + 1);
  }

  function del() {
    if (count >= 1) {
      setCounter(count - 1);
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={del}>Decrement</button>

      <Button />
    </>
  );
}

export default App;
