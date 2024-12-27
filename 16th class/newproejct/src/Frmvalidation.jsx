import React, { useState } from 'react'

export default function Frmvalidation() {
    let [input,setInput] = useState({
        username:'',
        address:'',
        email:'',
        number:''
    })

    const hinput = (event) => {
        const {name,value} = event.target;
        setInput({
            ...input,
            [name]:value
        })
        console.log(name,value)
    }

    const finalsubmit = (event)=>{
        event.preventDefault();
        console.log(input)
    }

  return (
    <>
    <form onSubmit={finalsubmit}>

        <label htmlFor="">Name</label>
        <input type="text" name='username' value={input.username} onChange={hinput} />
        <label htmlFor="">Address</label>
        <input type="text" name='address' value={input.address} onChange={hinput} />

        <label htmlFor="">Email</label>
        <input type="text" name='email' value={input.email} onChange={hinput} />
        <label htmlFor="">Mobile</label>
        <input type="number" name='number' value={input.number} onChange={hinput} />
    <button type="submit">Submit</button>


        
    </form>
    </>

)
}
