import React from "react";
import { RadioGroup,Radio} from "@chakra-ui/react"
const AddProduct = ({handleChange}) => {


  return (
    <>
      <button my={4} data-cy="add-product-button"></button>
      
        <form pb={6}>
          <label >Title</label>
          <input data-cy="add-product-title" onChange={handleChange}/>
          <select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt" onChange={handleChange}>Shirt</option>
            <option data-cy="add-product-category-pant" onChange={handleChange}>Pant</option>
            <option data-cy="add-product-category-jeans" onChange={handleChange}>Jeans</option>
          </select>
          <RadioGroup  data-cy="add-product-gender">
            <Radio  data-cy="add-product-gender-male" onChange={handleChange} value="male">Male</Radio >
            <Radio  data-cy="add-product-gender-female" onChange={handleChange} value="female">Female</Radio >
            <Radio  data-cy="add-product-gender-unisex" onChange={handleChange} value="unisex">Unisex</Radio >
          </RadioGroup>
          <label>price</label>
          <input data-cy="add-product-price" />
          <button data-cy="add-product-submit-button">Create</button>
        </form>
      
    </>
  );
};

export default AddProduct;