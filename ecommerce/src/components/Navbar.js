import React from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {json, Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useSelector } from "react-redux";
export const Navbar = () => {
  let Name = localStorage.getItem("Name");

 let datae=useSelector((state)=>state.viewData)

 console.log("navabatr"+ JSON.stringify(datae))
  let handicon=()=>
  {
    alert("hi")
  }
  return (
    <div>
      <div className="Navbar">
        <div className="ecommerce_title">
         
         <Link to="/Home" > <i class="bi bi-shop"></i> </Link><h1> Ecommerce</h1>
        </div>
        <input type="text" placeholder="Search for Products " />
        <div className="user_icon">
      
          <div>
            <i class="bi bi-person-circle user "  ></i>

     
          </div>
          
          <p>{Name}</p>
          <div className="cartdataadd" >
           
          <i class="bi bi-bag bag "></i>
          {datae.map((item)=>
            (     <div className="circle" key={item.index} >{item.quantity}</div>))}
     
        </div>
        </div>

     
      </div>
      
    </div>
  );
};
