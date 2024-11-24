import React, { createContext, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { date } from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Image/slide1.webp'
import img2 from '../Image/slid2.png'
let Context=createContext()
export const Home = () => {

  let Navigate=useNavigate()
  let [value, setValue] = useState([]);
 

  useEffect(() => {
    fetchdata();
  }, []);
  let fetchdata = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");

    console.log(res.data);
    setValue(res.data);
  };
  let handleImage=(item)=>
  {
    Navigate('/ViewProduct',{state:item})

  }
 
//   let handleItem=()=>

// {
// Navigate("/item")
//   }
  let handleAddToCart=()=>
  {
  

  }
  return (
    <div className="home_content">
    <Navbar/>
    {/* <div className="home_slide"  >
    <Carousel>
      <Carousel.Item>
      <img src={img1}   ></img>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2}   ></img>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
 
      </Carousel.Item>
    </Carousel>


    </div> */}
      <div className="api_content">
        {value.map((item) => (
          <div className="box_content33" onClick={()=>handleImage(item)}   >
            <img src={item.image}   />
            <h3>{item.title}</h3>
          </div  >
        ))}

      </div>

    </div>
  );
};

