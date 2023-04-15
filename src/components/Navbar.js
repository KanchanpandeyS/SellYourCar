import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineCar} from 'react-icons/ai'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'


const Navbar = () => {

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  const navigate = useNavigate();
  return (
    <div className='header'>
        <div className='logo-container'>
        <AiOutlineCar className='logo'/>
        <h2>SellMyCar</h2>
        </div >
        <div className='button-container'>
            <button className='AddDetail-btn' onClick={() =>navigate("/addDetail")}>Add Car Details</button>
            <button className='AddDetail-btn' onClick={() => {alert("logged Off");
            signOut(firebaseAuth)}}>
            LogOut
            </button>
        </div>
    </div>
  )
}

export default Navbar