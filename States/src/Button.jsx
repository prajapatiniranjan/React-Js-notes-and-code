import React, { useState } from 'react';

function Button() {
  let [count, setCounter] = useState("red");

  const handleYellow = () => setCounter("yellow");
  const handleOrange = () => setCounter("orange");
  const handleGreen = () => setCounter("green");
  const handleRed = () => setCounter("red");

  return (
    <>
      <div style={{ height: "100vh", width: "100vw", backgroundColor: count }}>
        <h1>{count}</h1>
        <button onClick={handleYellow}>Yellow</button>
        <button onClick={handleRed}>Red</button>
        <button onClick={handleOrange}>Orange</button>
        <button onClick={handleGreen}>Green</button>
      </div>
    </>
  );
}

export default Button;
