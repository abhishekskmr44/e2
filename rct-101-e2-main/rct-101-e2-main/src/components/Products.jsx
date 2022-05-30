import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";
const axios = require('axios').default
const Products = () => {
  // TODO: Remove below const and instead import them from chakra

  const [data,setdata] = useState([]);
  const [aboutpage,setpage] = useState({
    pageno:1,
    limit:3,
    total:0
  })
  
  const take = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/products`)
        
        setdata(res.data)
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(() =>{
    take();
  },[])

  return (
    <Flex>
      <AddProduct/>
      <Grid>
        {data.map(e => <Product data={e}/>)}
        </Grid>
      <Pagination pagenos={aboutpage} setpage={setpage}/>
    </Flex>
  );
};

export default Products;