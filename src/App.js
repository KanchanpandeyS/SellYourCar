import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home'
import Signup from './Pages/Signup';
import AddDetails from './Pages/AddDetails';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addDetail' element={<AddDetails />} />
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
