import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

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

 localStorage.setItem("locate", JSON.stringify(input));
  };

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
      <label htmlFor="number">Mobile</label>
      <input
        type="number"
        name="number"
        value={input.number}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}
