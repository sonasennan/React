import './App.css'
import Home from './Pages/Home'
import Dash from './Pages/Dash'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import{useState} from "react";
function App() 
{
    const [data, setData] = useState([
        { rollNumber: 1, name: "John", age: 25, course: "EC" },
        { rollNumber: 2, name: "Jane", age: 30, course: "CS" },
        { rollNumber: 3, name: "Bob", age: 20, course: "CA" },
        { rollNumber: 4, name: "Alice", age: 35, course: "CMA" }
    ]);


const [currentIndex, setCurrentIndex] = useState(0);

    const dataToAdd = [
      { rollNumber: 5, name: 'Mark', age: 40, course: 'EE' },
      { rollNumber: 6, name: 'Jack', age: 41, course: 'EC' },
      { rollNumber: 7, name: 'Tom', age: 42, course: 'CS' },
      { rollNumber: 8, name: 'Sam', age: 43, course: 'CA' }
    ];


  
  const handleAddingRow = () => {
      if (currentIndex < dataToAdd.length) {
        const newData = dataToAdd[currentIndex];
        setData(prevData => [...prevData, newData]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    };
    return (
    <>

    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<Dash data={data} handleAddingRow={handleAddingRow}/>} />
        </Routes>
    </Router>

</>
    )
}


export default App
