import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

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
        <Button variant="outlined" color="error" size="small" onClick={handleCounter} disableElevation>Counter</Button> &nbsp;  
        <Button variant="outlined" size="small" onClick={handleDash} disableElevation>User Details</Button>
        </div>
        </>
        )
    
}

export default Welcome;