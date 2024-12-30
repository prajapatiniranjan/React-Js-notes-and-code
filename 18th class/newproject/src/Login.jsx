import React, { useState, useEffect } from "react";

export default function Login() {
  let [inputt, setInputt] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("login"));
    if (savedData) {
      setInputt({
        username: savedData.username || "", 
        email: savedData.email || "", 
      });
    }
  }, []); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputt({
      ...inputt,
      [name]: value,
    });
  };

  function submit(e) {
    e.preventDefault();
    let a = JSON.parse(localStorage.getItem("login"));
    console.log(a);
    
    let name = a?.username; 
      let email = a?.email; 
    if (inputt.username !== name) {
      alert("Wrong username");
    }

    if (inputt.email !== email) {
      alert("Wrong email");
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          value={inputt.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={inputt.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
