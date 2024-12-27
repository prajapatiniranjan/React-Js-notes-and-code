import './App.css'
import Nav from  './Navbar.jsx'

function App() {
  let st ={
    backgroundColor:"black",
    color:"Cyan"
  }
  return (
    <>
    <Nav/>
      <h1 style={{ backgroundColor: "red" }}> inline css applying in camelcase</h1>
      <h2 style={st}> Internal css applying as object in camelcase
      </h2>
      <h1 className="head1">External css applying</h1>
      <p>In jsx we need to close the tags, althouth it would be container tag or not</p>

    </>
  );
}

export default App;
