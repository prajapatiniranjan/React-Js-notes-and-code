import React, { useEffect, useState } from "react";

function ChangeBg() {
  let [colour, setColour] = useState("white");

  useEffect(() => {
    alert("Color is changed to " + colour);
  }, [colour]);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: colour }}>
      <button onClick={() => setColour("red")}>Red</button>
      <button onClick={() => setColour("blue")}>Blue</button>
      <button onClick={() => setColour("green")}>Green</button>
      <button onClick={() => setColour("yellow")}>Yellow</button>
    </div>
  );
}

export default ChangeBg;
