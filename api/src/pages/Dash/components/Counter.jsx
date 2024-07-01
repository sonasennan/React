import { useSelector , useDispatch } from "react-redux";
import { decrement , increment , selectCountValue} from "../../../store/counter";
import { useNavigate } from "react-router-dom";



export default function Counter()
{
    const navigate= useNavigate();
    const handleHome = () =>{
        navigate("/")
    }


    const count = useSelector(selectCountValue)
    const dispatch = useDispatch()

    return(
        <>
        <div>
            <div>
            <button onClick={() => dispatch(increment())}>Increment Value</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement Value</button>
            </div>
        </div>
        <button onClick={handleHome}>Go Home</button>
        </>

    
    );
}