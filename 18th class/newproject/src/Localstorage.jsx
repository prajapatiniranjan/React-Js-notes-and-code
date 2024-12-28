import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    email: "",
   
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
    if(input.username=="" || input.email=="")
    {
      alert("Both field are required")
    }
    else{
 localStorage.setItem("locate", JSON.stringify(input));

    }

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
     
     
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}
