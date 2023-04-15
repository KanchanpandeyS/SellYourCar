import React, { useEffect } from "react";
// import car1 from '../assets/car1.jpg'
// import car2 from '../assets/car2.jpg'
// import car3 from '../assets/car3.jpg'
// import car4 from '../assets/car4.jpg'
// import car5 from '../assets/car5.jpg'
// import car6 from '../assets/car6.jpg'
// import car7 from '../assets/car7.jpg'
// import car8 from '../assets/car8.jpg'
// import car9 from '../assets/car9.jpg'
// import car10 from '../assets/car10.jpg'
// import car11 from '../assets/car11.jpg'
import Navbar from "../components/Navbar";
import { useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [filter, setFilter] = useState("price");

  const [isloading, setIsLoading] = useState(false);

  let [fetchdata, setFetchData] = useState([]);
  // const carList = [
  //   {
  //     name:"Baleno",
  //     color:"Brown",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car1,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Thar",
  //     color:"Red",
  //     price:"1400000",
  //     milage:"15km",
  //     year:"2023",
  //     img:car2,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"BMW",
  //     color:"White",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car3,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"Blue",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car4,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:" Sky Blue",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car5,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"Olive",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car6,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"Bright Blue",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car7,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"White",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2021",
  //     img:car8,
  //     Deiven:"100000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"Black",
  //     price:"800000",
  //     milage:"20km",
  //     year:"2015",
  //     img:car9,
  //     Deiven:"1900000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"red",
  //     price:"900000",
  //     milage:"20km",
  //     year:"2020",
  //     img:car10,
  //     Deiven:"9000000"
  //   },
  //   {
  //     name:"Baleno",
  //     color:"Maroon",
  //     price:"1200000",
  //     milage:"17km",
  //     year:"2022",
  //     img:car11,
  //     Deiven:"1800000"
  //   }
  // ]
  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://sellmycar-e7dd1-default-rtdb.asia-southeast1.firebasedatabase.app/mycars.json"
      );
      const data = await res.json();

      const fetchedata = [];
      for (const keys in data) {
        fetchedata.push({
          mydata: data[keys],
        });
      }
      setFetchData(fetchedata);
      setIsLoading(false);
    };
    getdata();
  }, []);

  // console.log(filter);
  
 
  if (filter === "priceh") {
    fetchdata = fetchdata.sort((a, b) => b.mydata.price - a.mydata.price);
  }
  if (filter === "pricel") {
    fetchdata = fetchdata.sort((a, b) => a.mydata.price - b.mydata.price);
  }
  if (filter === "milage") {
    fetchdata = fetchdata.sort((a, b) => b.mydata.milage - a.mydata.milage);
  }

  return (
    <div className="car-list">
      <Navbar />
      {isloading?<div className="loading-container"><Loading /></div>:""}
      <div>
        <div className="filter">
          <select name="filter" onChange={(e) => setFilter(e.target.value)}>
            <option default>Filter</option>
            <option value="priceh"> High to low</option>
            <option value="pricel"> low to High </option>
            <option value="milage">Milages </option>
          </select>
        </div>
        <div className="px-4 py-2">
          <div className="row my-custom">
            {fetchdata.map((obj,idx) => {
              return (
                <div className={`col-sm-6 col-md-3 mb-3 `}key={idx}>
                  <div className="col-md-3">
                    <div
                      className="card col-md-3"
                      style={{ width: "340px", height: "550px" }}
                    >
                      <img
                        src={obj.mydata.imageurl}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h3 className="card-title">
                          Brand: {obj.mydata.brnadName}
                        </h3>
                        <ul className="text-left">
                          <li>
                            <p className="card-text">
                              <strong>Model : </strong>{obj.mydata.model}
                            </p>
                          </li>
                          <li>
                            <p className="card-text">
                              <strong>Color :</strong> {obj.mydata.color}
                            </p>
                          </li>
                          <li>
                            <p className="card-text">
                             <strong>Price :</strong> {obj.mydata.price}
                            </p>
                          </li>
                          <li>
                            <p className="card-text">
                              <strong>Milage :</strong> {obj.mydata.milage}
                            </p>
                          </li>
                          <li>
                            <p className="card-text">
                              <strong>Manufactur Year :</strong> {obj.mydata.manufacturyear}
                            </p>
                          </li>
                        </ul>
                        <p className="card-text">
                          <strong>Discription :</strong> {obj.mydata.discription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
