import React, { useState } from "react";

export const Hbtn = () => {
  let [para, setH] = useState(false);

  return (
    <>
      <button onClick={() => setH(!para)}>
        {" "}
        {para ? <h1>hide</h1> : "show"}
      </button>
      {/* {p} */}

      {para ? <h1>hello world</h1> : ""}
    </>
  );
};

export default Hbtn;
