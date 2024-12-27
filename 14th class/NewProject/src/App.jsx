import { useState } from "react";
import Hbtn from "./Hbtn";
import Newprject from "./Newprject";

function App() {
  let [para, setH] = useState(false);
  // let p = "";

  // if (h) {
  //   p = <h1>Time is now</h1>;
  // } else {
  //   p = "";
  // }

  return (
    <>
      <button onClick={() => setH(!h)}>show</button>
      {/* {p} */}

      {para ? <h1>hello world</h1> : ""}
      <Hbtn />
      <Newprject/>
    </>
  );
}

export default App;
