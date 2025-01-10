import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fetch() {
  const [apijsondata, setJsonApidata] = useState([]);

  const mydelete = (id) => {
    axios.delete(`http://localhost:3000/Student/${id}`)
      .then(res => alert("Deleted"));
      }
    
  

  useEffect(() => {
    axios.get('http://localhost:3000/Student')
      .then(res => {
        // console.log(res.data);
        setJsonApidata(res.data);
      })

  }, [mydelete]);

  return (
    <>
      <div>
        <table border="1" >
          <thead>
            <tr>
                <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Contact</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apijsondata.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.contact}</td>
                <td>{item.city}</td>
                <td><button onClick={() => mydelete(item.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Fetch;
