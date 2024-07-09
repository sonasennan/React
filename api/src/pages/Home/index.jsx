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

    const handleListProducts =() =>{
        navigate("/product")
    }

    // const handleForm =() =>{
    //     navigate("/form")
    // }

    return(
        <>
        <div>
        <h1>Home Page...</h1>
        <Button variant="outlined" color="error" size="small" onClick={handleCounter} disableElevation>Counter</Button> &nbsp;  
        <Button variant="outlined" size="small" onClick={handleDash} disableElevation>User Details</Button>
        <Button variant="outlined" size="small" onClick={handleListProducts} disableElevation>View Products</Button>
        {/* <Button variant="outlined" size="small" onClick={handleForm} disableElevation>Modal</Button> */}
        </div>
        </>
        )
    
}

export default Welcome;