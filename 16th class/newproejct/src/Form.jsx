import React, { useState } from "react";

const Form = () => {
  let [h, setH] = useState("");
  let [sec, setSec] = useState("");
  let [input, setInput] = useState(false);

  function hinput(event) {
    console.log(event.target.value);
    setH(event.target.value);
  }
  function secinput(event) {
    console.log(event, target.value);
    setSec(event, target.value);
  }
  function show() {
    setInput(`Full Name: ${input} ${setInput}`);
  }

  return (
    <>
      <h1>Enter Your Name</h1>

      <h2 style={{ color: "red" }}>My name is = {h}</h2>
      <h1>Enter Your Surname</h1>
      <h2 style={{ color: "red" }}>Surname is = {sec}</h2>

      <input type="text" onChange={hinput} />
      <input type="text" onChange={secinput} />
      <br />
      <br />
      <h1>{input}</h1>
      <button onClick={show}>Submit</button>
    </>
  );
};

export default Form;
