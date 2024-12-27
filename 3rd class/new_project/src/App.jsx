import { createElement } from 'react'
import './App.css'

function App() {
let name = "Max"
let obj = {
  fname: "Niranjan Prajapati",
  age: 26
}
  return (
<>
<h1>My name is {name}</h1>
<h1>{obj.fname}</h1>
<h1>{obj.age}</h1>

</>  
  )
}

export default App
