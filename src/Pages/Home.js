import React from 'react'
import car1 from '../assets/car1.jpg'
import car2 from '../assets/car2.jpg'
import car3 from '../assets/car3.jpg'
import car4 from '../assets/car4.jpg'
import car5 from '../assets/car5.jpg'
import car6 from '../assets/car6.jpg'
import car7 from '../assets/car7.jpg'
import car8 from '../assets/car8.jpg'
import car9 from '../assets/car9.jpg'
import car10 from '../assets/car10.jpg'
import car11 from '../assets/car11.jpg'
import Navbar from '../components/Navbar'
const Home = () => {
  const carList = [
    {
      name:"Baleno",
      color:"Brown",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car1,
      Deiven:"100000"
    },
    {
      name:"Thar",
      color:"Red",
      price:"1400000",
      milage:"15km",
      year:"2023",
      img:car2,
      Deiven:"100000"
    },
    {
      name:"BMW",
      color:"White",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car3,
      Deiven:"100000"
    },
    {
      name:"Baleno",
      color:"Blue",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car4,
      Deiven:"100000"
    },
    {
      name:"Baleno",
      color:" Sky Blue",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car5,
      Deiven:"100000"
    },
    {
      name:"Baleno",
      color:"Olive",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car6,
      Deiven:"100000"
    },
    {
      name:"Baleno",
      color:"Bright Blue",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car7,
      Deiven:"100000"
    },
    {
      name:"Baleno",
      color:"White",
      price:"800000",
      milage:"20km",
      year:"2021",
      img:car8,
      Deiven:"100000"
    },
    {
      name:"Baleno",
      color:"Black",
      price:"800000",
      milage:"20km",
      year:"2015",
      img:car9,
      Deiven:"1900000"
    },
    {
      name:"Baleno",
      color:"red",
      price:"900000",
      milage:"20km",
      year:"2020",
      img:car10,
      Deiven:"9000000"
    },
    {
      name:"Baleno",
      color:"Maroon",
      price:"1200000",
      milage:"17km",
      year:"2022",
      img:car11,
      Deiven:"1800000"
    }
  ]
  return (
    <div className='car-list'>
     <Navbar />
      {/* <img classNameName='homebg' src={homebg} alt='homebg'/> */}
      <div>
        <div>
          <select name="filter">
            <option>Price</option>
            <option> Color</option>
            <option>Milages </option>
          </select>
        </div>
        <div className="px-4 py-2">
			
			<div className="row">
				{ carList.map((car ) => {
					return (
						<div  className={`col-sm-6 col-md-3 mb-3 text-center`}>
              <div className="col-md-3">
                
                <div className="card col-md-3" style={{width:'340px', height:'450px'}}>
  <img src={car.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Brand: {car.name}</h5>
    <ul>
    <li><p className="card-text">Color : {car.color}</p></li>
    <li><p className="card-text">Price : {car.price}</p></li>
    <li><p className="card-text">Milage : {car.milage}</p></li>
    <li><p className="card-text">Year : {car.year}</p></li>
    <li><p className="card-text">Kilometer Driven : {car.Deiven}</p></li>
    </ul>
 
  </div>
</div>
              </div>
						</div>
					)
				})}
			</div>
      </div>
      </div>
    </div>
  )
}

export default Home;
