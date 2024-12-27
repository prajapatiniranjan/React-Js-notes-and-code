import Child2 from './Child2'
const Child1=  (props)=>{
    return(
        
            <>
            <h1>{props.Name}</h1>
            <h1>{props.Age}</h1>
            <h1>{props.Add}</h1>
            <Child2 fname={props.Name}/>
            </>
        
    )
}
export default Child1