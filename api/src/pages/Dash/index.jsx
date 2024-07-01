import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../store/user.js";
import { useNavigate } from "react-router-dom";



  const Dashboard = () => {

    const navigate= useNavigate();
    const handleHome = () =>{
        navigate("/")
    }
  const dispatch = useDispatch(); 
  const userData = useSelector((state) => state.userData.data);
  const isLoading = useSelector((state) => state.userData.status); 
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]); 
   return (
    <>  
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>User Details</h1>
          <table className="dashboard-table" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>First Name</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Last Name</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data) => (
                <tr key={data.id} style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.id}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.name.firstname}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.name.lastname}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    <button onClick={handleHome}>Go Home</button>
      
    </>
  );
};

export default Dashboard;


