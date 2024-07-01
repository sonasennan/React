import { useNavigate } from "react-router-dom";


function Welcome()
{
    const navigate = useNavigate();
    const handleCounter =() =>{
        navigate ("/counter");
    }

    const handleDash =() =>{
        navigate ("/dashboard");
    }

    return(
        <>
        <div id="d">
        <h1>Home Page...</h1>
        <button onClick={handleCounter}>Counter</button>
        <button onClick={handleDash}>User Details</button>
        </div>
        </>
        )
    
}

export default Welcome;