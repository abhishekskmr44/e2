import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const {isAuth, logout} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLoginClick = () => {
        //loginscreen
        if(isAuth){
            logout();
            navigate("/login");
         //he wants to logout   
        } else{
         //he wants to login
         navigate("/login");
        }
        
    };
  return (
    <div style={{padding:"10px",display:'flex', gap:'20px'}}>
    Navbar:
    <Link to="">Home</Link>
    <Link to="/Feeds">Feeds</Link>
    <button onClick={handleLoginClick}>
     {/*Spacer*/}
    {isAuth ? "Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;