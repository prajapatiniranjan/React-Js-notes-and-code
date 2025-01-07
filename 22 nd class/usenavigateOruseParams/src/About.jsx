import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function About() {

    let nav = useNavigate()
    function contactpage(){
        nav('/contact')
    }

    const {name} = useParams();
    console.log(name);

  return (

    <>
    <h5> about {name}</h5>
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page.</p>
    </div>

    <button onClick={contactpage} >Contact Us</button>
    </>
    
  );
}

export default About;
