import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {

    let nav = useNavigate()
    function contactpage(){
        nav('/contact')
    }

  return (

    <>
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page.</p>
    </div>

    <button onClick={contactpage} >Contact Us</button>
    </>
    
  );
}

export default About;
