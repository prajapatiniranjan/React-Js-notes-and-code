import React from 'react'
import Form from './Form'

export default function App() {
  
  let arr = ["Niranjan",23,"Bhopal"]
  let ar = arr.map((e,index) => {return <li key={index}>{e}</li>})

  let array = [
    {Name: 'Max Prajapati',age:26},
    {Name: 'Niranjan Prajapati',age:26},
    {Name: 'Max Prajapati',age:26},
    {Name: 'Niranjan Prajapati',age:26}
  ]
  return (
    <>
    { arr.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
    { array.map((e,index)=>{return <h1 key={index}>{e.Name}</h1>})}


    <ul>
    {ar}

    </ul>

    

    <Form/>
    </>
  )
}
