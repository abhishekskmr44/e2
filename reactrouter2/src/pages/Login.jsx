import React, {useState, useContext} from 'react'
import {AuthContext} from "../context/AuthContext";

const Login = () => {

    const[loginCreds, setLoginCreds]= useState({});
    const {login} = useContext(AuthContext);
    const handleChange = (e)=>{
      const{name,value} = e.target;
      setLoginCreds({
       ...loginCreds,
       [name]: value,

      })
    }

   const handleSubmit = (e) => {
     e.preventDefault();
     login();

     //TODO
   }

  return (
    <div>Login
    <form onSubmit = {handleSubmit} style={{display:'flex', flexDirection:"column", margin:'auto',maxWidth:'200 px',gap:"10 px"}}>
   
   
   
    <input name = "email" type = "text" placeholder = "Enter email" onChange={handleChange}/>
    <input name = "password" type = "password" placeholder = "Enter Password..." onChange={handleChange}/ >
    <button type = "submit">Login</button>
    </form>
       
    </div> 
  )
}

export default Login
