// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Axios() {
//   let [apidata, setApidata] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then(res => {
//         console.log(res.data);
//         setApidata(res.data);
//       })
//   }, []);

//   return (
//     <div>
//       {/* <h3>How to Fetch data in list</h3>
//       <ul>
//         {apidata.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul> */}
//     <table>
//         <thead>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Title</th>
//         </thead>
//     </table>

//     </div>
//   );
// }

// export default Axios;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [apidata, setApidata] = useState([]);
  const [frminp, setFrminp] = useState({
    name: "",
    age: "",
    contact: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/Student")
      .then((res) => {
        // console.log(res.data);
        setApidata(res.data);
      })
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  const changeinp = (e) => {
    setFrminp({
      ...frminp,
      [e.target.name]: e.target.value,
    });
  };

  const submitform = (e) => {
    e.preventDefault();
axios.post('http://localhost:3000/Student',frminp)
.then(r=>alert("inserted"))
  }

 
  return (
    <>
      <div>
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Contact</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {apidata.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.contact}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={submitform}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={frminp.name}
          onChange={changeinp}
        />{" "}
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age" 
          value={frminp.age}
          onChange={changeinp}
        />{" "}
        <br />
        <br />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={frminp.contact}
          onChange={changeinp}
        />{" "}
        <br />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={frminp.city}
          onChange={changeinp}
        />{" "}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Axios;
