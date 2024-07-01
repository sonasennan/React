import './App.css'
import Counter from './pages/Dash/components/Counter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dash from './pages/Dash';
import Home from './pages/Home'

function App()
{
  return (
    
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/dashboard' element={<Dash />} />
      </Routes>
    </Router>
    
    );
}

export default App
