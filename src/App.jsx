
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './views/pages/Home/Home';
import Task1 from './views/pages/Task1/Task1';
import FourNotFour from './views/pages/404/FourNotFour';
import Task2 from './views/pages/Task2/Task2';
import { Provider } from 'react-redux';
import { store } from './views/pages/Task2/store';


function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='*' element={<FourNotFour />} />
            <Route path='/' element={<Home />} />
            <Route path='/task1' element={<Task1 />} />
            <Route path='/task2' element={<Task2 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
