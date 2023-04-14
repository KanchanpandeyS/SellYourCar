import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineCar} from 'react-icons/ai'


const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className='header'>
        
        <AiOutlineCar className='logo'/>
        <h2>SellMyCar</h2>
        
        <div >
            <button className='AddDetail-btn' onClick={() =>navigate("/addDetail")}>Add Car Details +</button>
        </div>
    </div>
  )
}

export default Navbar