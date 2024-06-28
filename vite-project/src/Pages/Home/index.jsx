import { Link } from "react-router-dom"
function Welcome()  
{
    return (
        <>
    <div id="d" ><h1>Student Portal</h1></div>
    <button type="button"><Link to="/table">Click to see student details</Link></button>
    </>
    )
}

export default Welcome