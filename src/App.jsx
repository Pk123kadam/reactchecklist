
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './views/pages/Home/Home';
import Task1 from './views/pages/Task1/Task1';
import FourNotFour from './views/pages/404/FourNotFour';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='*' element={<FourNotFour />} />
          <Route path='/' element={<Home />} />
          <Route path='/task1' element={<Task1 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
