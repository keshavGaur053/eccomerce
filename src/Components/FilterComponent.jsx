import React, { useEffect } from "react";
import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../Redux/Product/action";

const FilterComponent = () => {
  //searchParams hook used it is available in redux
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch=useDispatch();
  // console.log(searchParams)
  // console.log(searchParams.getAll("category"))

  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("category") || []
  );
  const categoryHandle = (values) => {
    // console.log(values);
    setCategoryValues(values);
  };
  
  // useEffect is use we can update URL from here
  useEffect(() => {
    if (categoryValues) {
      //Replace true means we want to directly clear the stack
      setSearchParams({ category: categoryValues });
      let params={
        category:searchParams.getAll("category"),
      };
      dispatch(fetchData(params))
    }
  }, [categoryValues, searchParams, dispatch, setSearchParams]);


  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandle}
        >
         <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Men's Clothing</Checkbox>
            <Checkbox value="women's clothing">Women's Clothing</Checkbox>
            <Checkbox value="jewelery">jewelery</Checkbox>
            <Checkbox value="electronics">Electronics</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: "block", md: "none" }} p="0rem ">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterComponent;
