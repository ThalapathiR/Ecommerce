 import React, { useState } from 'react'
import "./Signup.css"
import axios from "axios"
// import { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {ErrorMessage,Formik} from 'formik'
import * as yup from "yup"
import Swal from 'sweetalert2'
export const Signup = () => {
  let Navigate=useNavigate()
  let [signup,setsignup]=useState({
    Name:"", Password:"",CfPassword:"",
    Email:"",phoneNo:""
})
let handleinput=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value})
}


const passwordRegex=/^\d{3}|| [a-b]$/
const emailRegex=/^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/

let Schema=yup.object().shape(
  {
    Name:yup.string().required("Name is required"),
    Password:yup.string().matches(passwordRegex, "password must contains  3 digits numbers").required("Password is required"),
    CfPassword:yup.string().oneOf([yup.ref("Password"),null], "confirm password doesn't matches with the original password").required("ConfirmPassword is required"),
    Email:yup.string().matches(emailRegex, "The email you have entered is incorrect").required("Email is required"),
    phoneNo:yup.string().required("Phonenumber is required")

  }
)

let handleSubmit=async(e)=>
{

  console.log("signup");
  Swal.fire({
    title: "SignUp SuccessFully!",
    icon: "success"
  });
   localStorage.setItem("Name",signup.Name)
  //  sessionStorage.setItem("Password",signup.Password)
  //  sessionStorage.setItem("Email",signup.Email)
  let result =await axios.post("http://localhost:4000/api/create",{Email:signup.Email,PassWord:signup.Password})

   Navigate('/')
}



  return (
    <div>
    <div  className='box_content1' >
       <Formik 
       
       initialValues={signup}
       validationSchema={Schema}
       onSubmit={handleSubmit}>


{({handleSubmit,handleChange})=>(

<form onSubmit={handleSubmit} > 
<div className='box_content2'>
<h1>Signup</h1>
       <input type='text' placeholder='Enter your name '  name='Name' value={signup.Name}  onChange={(e)=>{handleinput(e);handleChange(e)}} />
       <ErrorMessage  name="Name" component="div" className='text-danger'/>
       <input type='text' placeholder='Enter your Email 'name='Email' value={signup.Email} onChange={(e)=>{handleinput(e);handleChange(e)}} />
       <ErrorMessage  name="Email" component="div" className='text-danger'/>
       <input type='text' placeholder='Enter your password 'name='Password' value={signup.Password} onChange={(e)=>{handleinput(e);handleChange(e)}} />
       <ErrorMessage  name="Password" component="div" className='text-danger'/>
       <input type='text' placeholder='Enter your ConfirmPassword 'name='CfPassword' value={signup.CfPassword}  onChange={(e)=>{handleinput(e);handleChange(e)}} />
       <ErrorMessage  name="CfPassword" component="div" className='text-danger'/>
  
       <input type='text' placeholder='Enter your PhoneNO ' name='phoneNo' value={signup.phoneNo} onChange={(e)=>{handleinput(e);handleChange(e)}} />
       <ErrorMessage  name="phoneNo" component="div" className='text-danger'/>
       <button  type='submit'  >Signup</button>
        </div>
</form>
      )}
       
       </Formik>
  

          
   
    </div>
    </div>
  )
}
