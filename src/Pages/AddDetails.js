import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import classes from './AddDetail.module.css'

const AddDetails = () => {

  const [data, setData] = useState();

    const brandNameref = useRef();
    const imageurlref = useRef();
    const brandModelref = useRef();
    const Colorref = useRef();
    const Milageref = useRef();
    const priceref = useRef();
    const manufactringref = useRef();
    const discriptionref = useRef();
    const sellerCommentref = useRef();
  const submitHandler = ((e)=>{
    e.preventDefault();
    if(brandNameref.current.value === "" ||
    imageurlref.current.value === ""||
    brandModelref.current.value ===""||
    Colorref.current.value === ""||
    Milageref.current.value === ""||
    priceref.current.value === "" ||
    manufactringref.current.value||
    discriptionref.current.value||
    sellerCommentref.current.value)return;
    
    const Data = {
      brnadName:brandNameref.current.value,
      imageurl: imageurlref.current.value,
      model: brandModelref.current.value,
      color: Colorref.current.value,
      milage: Milageref.current.value,
      price : priceref.current.value,
      manufactringyear: manufactringref.current.value,
      discription: discriptionref.current.value,
      sellercomment: sellerCommentref.current.value
    }
    setData(Data);
    brandNameref.current.value = "";
    imageurlref.current.value = "";
    brandModelref.current.value = ""
    Colorref.current.value = "";
    Milageref.current.value = "";
    priceref.current.value = "";
    manufactringref.current.value ="";

  })
  useEffect (() =>{
      const sendData = fetch("https://sellmycar-e7dd1-default-rtdb.asia-southeast1.firebasedatabase.app/mycars.json",{
        method: "post",
        body:JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
    },[data]) 
  

  return (
    <section className={classes.section}>
     
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Brand Name </label>
        <input type='text' ref={brandNameref} placeholder='Enter Brand Name'  required/>
        <label>Model</label>
        <input type='text' ref={brandModelref} placeholder='Enter Model name' required/>
        <label>Image url</label>
        <input type='text'ref={imageurlref}  placeholder='Enter Image url' required/>
        <label>Manufactring Year</label>
        <input type='number' ref={manufactringref} placeholder='Enter Model name' required/>
        <label>Color</label>
        <input type='text'ref={Colorref} placeholder='Enter Color' required/>
        <label>Milage </label>
        <input type='number'ref={Milageref} placeholder='Enter Milage' required/>
        <label>Price </label>
        <input type='number' ref ={priceref} placeholder='Enter Price' required/>
        <label>Discription </label>
        <input type='text ' ref ={discriptionref} placeholder='Enter Discription' required/>
        <label>Sellers Comment </label>
        <textarea type='text' ref ={sellerCommentref} placeholder='Enter Price' required/>
        <button type='submit'>Add</button>
      </form>
     
    </section >
    
  )
}

export default AddDetails