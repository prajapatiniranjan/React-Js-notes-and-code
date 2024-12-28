import React from "react";
import FilteredNumbers from "./Filter";
import Form from "./Localstorage";

export default function App() {
  let array_of_obj = [
    {
      id: 1,
      name: "Niranjan",
      location: "Bhopal",
    },
    {
      id: 2,
      name: "Max",
      location: "Mandideep",
    },
  ];
  let array_of_objj = array_of_obj.map((e) => {
    return <h1 key={e.id}> {e.name}</h1>;
  });

  console.log(array_of_obj);

  return(
  <>
    <div>{array_of_objj}</div>
  
  <FilteredNumbers/>
  <Form/>
  </>
  )
}


