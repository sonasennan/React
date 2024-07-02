import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../store/user.js";
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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
        
        // <div>
        //   <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>User Details</h1>
        //   <table className="dashboard-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        //     <thead>
        //       <tr>
        //         <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
        //         <th style={{ border: "1px solid black", padding: "8px" }}>First Name</th>
        //         <th style={{ border: "1px solid black", padding: "8px" }}>Last Name</th>
        //         <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {userData.map((data) => (
        //         <tr key={data.id} style={{ border: "1px solid black" }}>
        //           <td style={{ border: "1px solid black", padding: "8px" }}>{data.id}</td>
        //           <td style={{ border: "1px solid black", padding: "8px" }}>{data.name.firstname}</td>
        //           <td style={{ border: "1px solid black", padding: "8px" }}>{data.name.lastname}</td>
        //           <td style={{ border: "1px solid black", padding: "8px" }}>{data.email}</td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        // </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right">{data.id}</TableCell>
              <TableCell align="right">{data.name.firstname}</TableCell>
              <TableCell align="right">{data.name.lastname}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      )}
    <br></br>
    <button onClick={handleHome}>Go Home</button>
      
    </>
  );
};

export default Dashboard;


