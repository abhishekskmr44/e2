import React from "react";
import { Text, Image,Box, Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"
const Product = ({title,category,price,gender,imageSrc}) => {

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={imageSrc} />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;