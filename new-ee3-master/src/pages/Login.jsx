import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate,useNavigate } from "react-router-dom";
const Login = () => {
const navigate = useNavigate()
const {login} = useContext(AuthContext)
  const handleclick =()=>{
 
login()
   navigate ('/')
  }


  return (
    <div>
      Login
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={handleclick}>Sublit</button>

     
    </div>
  );
};

export default Login;
