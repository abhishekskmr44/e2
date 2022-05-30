import React,{useState} from "react";
import data from '../data.json'
import CartButton from './CartButton'
import "./GDetails.css"
const GroceryDetails = ()=>{

const [count, setCount] = useState(0);

    const counter =()=>{
        setCount(count+1);
    }
    return(
        <div>
        <h1 className="sam">Groceries</h1>
        <p className="topdeal">Top Deals</p>
        <div className="container">
            
            {data.map(item => (
                <div className="card" key={item.id}>
                   
                    <div className="card-image">
                        <img src={item.imgURL} alt={item.name} />
                    </div>
                       <p>{item.title}</p>                            
                    <div className="price">
                    <h3>{item.sellingPrice}</h3>
                    <h4>{item.mrp}</h4>                                            
                    </div>  
                    <div className="all-btn">
                    <button onClick={counter} className="addcart">Add to Cart</button>  
                    
                    <CartButton/>  
                        </div>   
                  
                </div>
                    
                
            ))};
        </div>
        
        </div>
    )
}
export default GroceryDetails