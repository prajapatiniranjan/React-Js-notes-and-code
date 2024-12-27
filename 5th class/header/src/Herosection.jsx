import "./Herosection.css";
import heroimg from "./assets/image.png";

const Hero = () => {
  return (
    <div id="Hero">
      <div className="hero-left">
        <img
          style={{ width: "100%", height: "400px" }}
          src={heroimg}
          alt="Img"
        />
      </div>
      <div className="hero-right">
        <h1>Welcome to the Hero Section</h1>
        <p>Discover amazing content here.</p>
        <button>Show More</button>
      </div>
    </div>
  );
};

export default Hero;
