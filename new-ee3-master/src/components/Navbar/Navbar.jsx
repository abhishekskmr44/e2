import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
// use react-router Link or NavLink
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {



  const [item,setitem] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:8080/cartItems')
    .then((r) =>(
r.json()
    ))
    .then((d) =>(
      setitem(d)
          ))
   
  }, [])

  console.log()


  const navigate = useNavigate()
  const {isAuth,logout} = React.useContext(AuthContext)
  // console.log(isAuth)
const handle=() =>{
if(isAuth)
{
  logout()
  navigate('login ')
}
else{
  navigate('/login')
}
}




  return (
    <div data-cy="navbar" className="">
      
      
      <span data-cy="navbar-cart-items-count">Cart: {item.length}</span>
      <button data-cy="navbar-login-logout-button" onClick={handle}>{isAuth ? "logout":"login"}</button>
    </div>
    // <h1>Navbar</h1>
  );
};

export default Navbar;
