import React, { useState } from "react";

const Product = ({item}) => {
  // Note: this id should come from api
  const [count,setcount] =useState(0)
  // console.log(item)

const handleclick =()=>{
  setcount((prev)=> prev+1)
}

const handleclick2 =()=>{
  setcount((prev)=> prev-1)
}








  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={handleclick}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"onClick={handleclick2}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>
    </div>
  );
};

export default Product;


{/* <div style={{ border:'2px solid red' , width:'200px', margin:'auto'}}>
<h4>{el.name}</h4>
<p>{el.description}</p>
<button>-</button>
<span>8</span>
<button>+</button>
<button>Add to Cart</button>
</div> */}