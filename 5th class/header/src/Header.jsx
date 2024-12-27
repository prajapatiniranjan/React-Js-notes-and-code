import './Header.css'
import himg from './assets/download.jpg'
const Header = ()=>{
    return(
       <div className="App">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">MyWebsite</h1>
          <ul className="nav-links" style={{listStyle:"none",display:'flex',gap:(20),color:"white"}}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          
            <h2>Welcome to Hero Section</h2>
          
          <marquee behavior="" direction="right"> <h1><p style={{fontWeight:(2000),}}>Lets Learn new things today</p></h1></marquee>
          <img src="download.jpg" style={{width:"100%",height:"auto"}} />
        </div>
      </section>
        <img src={himg} alt="" />
    </div>
    )
}

export default Header