import React, { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@chakra-ui/react"
import Product from "./Product";
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";


const Products = () => {
  
  const[form,setForm]=useState({})
  const [newData, setNewData] = useState([]);
  const [page, setPage] = useState(1);
  const[totalcount,setTotalcount]=useState(0)
  const[limit,setLimit]=useState(3)

  const handleChange=(e)=>{
    let {name,value}=e.target
    console.log(name,value);
   
        setForm({
            ...form,
            [name]:value
        })
}

  useEffect(() => {
    fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((r) => r.json())
      .then((d) => {
        setNewData(d);
        setTotalcount(Number(d.headers["x-total-count"]))
        //console.log(d);
      });
  }, [page,limit]);
  return (
    < >
      {/*  AddProduct */}
      <AddProduct handleChange={handleChange}/>
      <Grid templateColumns='repeat(4, 20%)' gap={6} m="60px">
        {newData.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            gender={item.gender}
            imageSrc={item.imageSrc}
            category={item.category}
            price={item.price}
          />
        ))}
        {/* List of Products */}
      </Grid>
      {/* Pagination */}
      <Pagination page={page} setPage={setPage} totalcount={totalcount} limit={limit} setLimit={setLimit} />
    </>
    
  );
};

export default Products;