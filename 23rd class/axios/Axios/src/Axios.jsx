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


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
  let [apidata, setApidata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res.data);
        setApidata(res.data); 
      })
  }, []);

  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td> 
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Axios;
