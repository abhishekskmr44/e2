import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {

  const [item,setitem] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/products')
    .then((r) =>(
r.json()
    ))
    .then((d) =>(
      setitem(d)
          ))
   
  }, [])
  


  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
      
      {
        item.map(el=>(
         <Product item={el}/>
        ))
      }
    </div>
  );
};

export default Products;
