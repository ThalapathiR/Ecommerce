import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import './Login.css'
import axios from 'axios'
import Swal from "sweetalert2"
import { Navigate } from 'react-router-dom'
export const Login = () => {

  let Navigate=useNavigate()
  let [login,setLogin]=useState(
    {
      Email:"",
      PassWord:""
    }
  )

 let handleChange=(e)=>
 {
  setLogin({...login,[e.target.name]:e.target.value})
 }


 const handleLogin = async () => {

    const result = await axios.post("http://localhost:4000/api/login", {
      Email: login.Email,  // Corrected key for email
      PassWord: login.PassWord  // Corrected key for password
    })
    console.log(result)
    if(result.data==="success")
    {
      Navigate('/Home')
    }
   
};


  return (
    <div>

        <div className='login_Content' >
          <div  className='box_content' >  
            <h1>LOGIN</h1>
         
            <input placeholder='Enter your Email ' value={login.Email}  name='Email'  onChange={(e)=>handleChange(e)}></input>

            <input placeholder='Enter Your password' value={login.Password}  name='PassWord' onChange={(e)=>handleChange(e)} ></input>

            <button onClick={handleLogin} >Login</button>
            <div className='sign' >
                <p>create a new Account <span><Link to='/signup' >Signup </Link></span> </p>
            </div>
            {/* <button onClick={getValues} ></button> */}
            </div>
            </div>
    </div>
  )
}
