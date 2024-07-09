import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postFormData } from '../../store/form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const initialValues = {
  productName: '',
  price: '',
  rating: '',
  categoryName: '',
  image: '',
};

const Form = () => {
  const dispatch = useDispatch();
  // const currentStatus = useSelector((state) => state.formData.status);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(initialValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setProduct(initialValues); // Reset form fields when closing modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log(product, 'product data');
    dispatch(postFormData({ product: product }));
    handleClose(); // Close modal after form submission
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    <div>
      <Button onClick={handleOpen} style={buttonn}>Click to add new Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <form id="my-form" onSubmit={handleAddProduct}>
            <div style={{ marginBottom: '15px' }} id="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }} id="form-group">
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }} id="form-group">
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                value={product.rating}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }} id="form-group">
              <label>Category Name:</label>
              <input
                type="text"
                name="categoryName"
                value={product.categoryName}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }} id="form-group">
              <label>Image URL:</label>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>

            <div>
              <button type="submit" style={buttonStyle}>
                Add Product
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
    </>
  );
};

const inputStyle = {
  width: '80%',
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'black',
  border: 'none',
  padding: '12px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  marginTop: '10px',
  cursor: 'pointer',
  borderRadius: '4px',
};

const buttonn = {
  backgroundColor: '#4CAF50',
  color: 'black',
  border: 'none',
  padding: '12px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  marginTop: '10px',
  cursor: 'pointer',
  borderRadius: '4px',
};

export default Form;
