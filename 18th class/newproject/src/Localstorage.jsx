import React, { useState } from "react";
import Login from "./Login";
export default function Form() {
  const [input, setInput] = useState({
    username: "",
    email: "",
  });
  let [status, setStatus] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.username == "" || input.email == "") {
      alert("Both field are required");
    } else {
      localStorage.setItem("locate", JSON.stringify(input));
      setStatus(true);
    }

    // (input.username === "" || input.email === "")
    //     ? alert("Both fields are required")
    //     : localStorage.setItem("locate", JSON.stringify(input));
  };

  if (status) {
    return <Login/>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Name</label>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <br />
      <br />
      <input type="submit" />
    </form>
  );
}
