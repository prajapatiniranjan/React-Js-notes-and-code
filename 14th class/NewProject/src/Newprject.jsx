import React, { useState } from "react";

function Newprject() {
  let [counter, setcounter] = useState(0); 
  let [backgrnd, setbg] = useState("white");

  function show() {
    setcounter(counter + 1);
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vh",
          backgroundColor: backgrnd, 
        }}
      >
        <button onClick={show}>{counter}</button>
        <button onClick={() => setbg("blue")}>blue</button>
        <button onClick={() => setbg("black")}>black</button>
        <button onClick={() => setbg("yellow")}>yellow</button>
      </div>
    </>
  );
}

export default Newprject;
