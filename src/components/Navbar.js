import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineCar} from 'react-icons/ai'
import {FaPowerOff} from 'react-icons/fa'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'


const Navbar = () => {

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
  const navigate = useNavigate();
  return (
    <div className='header'>
        
        <AiOutlineCar className='logo'/>
        <h2>SellMyCar</h2>
        
        <div >
            <button className='AddDetail-btn' onClick={() =>navigate("/addDetail")}>Add Car Details +</button>
            <button  onClick={() => {alert("logged Off");
            signOut(firebaseAuth)}}>
            <FaPowerOff style={{color:"#7b062f", height:'25px', width:'30px'}}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar