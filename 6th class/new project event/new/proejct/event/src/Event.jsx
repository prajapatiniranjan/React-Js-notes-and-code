
import './Event.css'
export default function Event() {
    function click(){
        alert("Hello to cliked it now");
    }
    function DoubleClick(){
        alert("here iam double click button")
    }
    function mouseenter(){
        prompt("Mouse enter");
    }
    function mouseleave(){
        prompt("mouse leave");
    }
    function mousemove(){
        prompt("killer mouse move");
    }
    function mouseout(){
        prompt("Mouse out")
    }

  return (
    <div>
      
      <button onClick={click}>Click me</button>
      <button onDoubleClick={DoubleClick} > Double click</button>
      <button  onMouseEnter={mouseenter}>Enter</button>
      <button onMouseLeave={mouseleave}>Leave</button>
      <button onMouseMove={mousemove}>move</button>
      <button onMouseOut={mouseout}>out</button>
    </div>
  )
}