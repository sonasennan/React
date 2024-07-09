import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../store/product.js";
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Form from "../Form"


const Product = () => {

    const navigate= useNavigate();
    const handleHome = () =>{
        navigate("/")
    }
  const dispatch = useDispatch(); 
  const productData = useSelector((state) => state.productData.data);
  const isLoading = useSelector((state) => state.productData.status); 
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]); 
   return (
    <>  
    <Form/>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">category_id</TableCell>
            <TableCell align="right">category_name</TableCell>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">product_id</TableCell>
            <TableCell align="right">product_name</TableCell>
            <TableCell align="right">rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productData.map((data) => (
            <TableRow
              key={data.product_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right">{data.category_id}</TableCell>
              <TableCell align="right">{data.category_name}</TableCell>
              <TableCell align="right"><img src={data.image} style={{ maxWidth: '250px', maxHeight: '250px' }}></img></TableCell>
              <TableCell align="right">{data.price}</TableCell>
              <TableCell align="right">{data.product_id}</TableCell>
              <TableCell align="right">{data.product_name}</TableCell>
              <TableCell align="right">{data.rating}</TableCell>
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

export default Product;


