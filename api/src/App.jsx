import './App.css'
import Counter from './pages/Dash/components/Counter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dash from './pages/Dash';
import Home from './pages/Home';
import Product from './pages/Product';
import Form from './pages/Form';


function App()
{
  return (
    
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/product' element={<Product />} />
        <Route path='/form' element={<Form />} />
        
      </Routes>
    </Router>
    
    );
}

export default App
