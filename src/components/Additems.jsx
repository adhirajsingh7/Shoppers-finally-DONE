import React, { useEffect, useState } from "react";
import ItemsCard from "./ItemsCard";
import {
  Button,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import "../Styles/Additems.css";

const Additems = ({ loggedUser }) => {

  //ItemsList
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ItemsList')));
  

  //Handling changes to LocalStorage
  useEffect(()=>{
    localStorage.setItem('ItemsList',JSON.stringify(items))
  },[items])


  //Cart Items
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('a')))
  const UserCart = loggedUser.cartItems
  const [cartItems, setCartItems] = useState(UserCart)
  
  // console.log(cartItems); 

  const handleAddtoCart = (item) => {
  
    if(cartItems) setCartItems([...cartItems, item])
    else setCartItems(item)
  };

  // console.log({...loggedUser, cartItems : [1,2,3,4,5]});

  useEffect(()=>{
    const UpdatedUser = {...loggedUser, cartItems : cartItems}
    localStorage.setItem(`${loggedUser.email}`,JSON.stringify(UpdatedUser) )
  },[cartItems])






  //Add item to Displaying ItemsList
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    price: "",
  });


  // Handling Form Changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewItem({ ...newItem, [name]: value });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (items) setItems([...items, newItem]);
    else setItems([newItem]);

      
    // setUpdatedUser({...UpdatedUser, cartItems : [...items ,newItems] })

    // localStorage.setItem(`${loggedUser.email}`, JSON.stringify(UpdatedUser));



    // Reseting Form items
    
    // setNewCart({
    //     title : '',
    //     description : '',
    //     price : ''
    // })
  };

  



  const handleDeleteItem = (itemTitle) => {

    const filteredItems = items.filter((item) => {
      return item.title !== itemTitle;
    })
    setItems(filteredItems);
    
    // console.log(filteredcart);
    



    // const filteredLoggedUser = 
    // console.log(loggedUser.cartItems)
    

    // const cartItems = testcart.carItems;
    // setTestCart({ ...testcart, cartItems: filteredcart });
    
    // localStorage.setItem(`${loggedUser.email}`, JSON.stringify(testcart));


    // setUpdatedUser({...UpdatedUser, cartItems : filteredcart })

    // localStorage.setItem(`${loggedUser.email}`, JSON.stringify(UpdatedUser));
    
  };

  return (
    <>

        {/* Conditional Add item box  */}

        {loggedUser.role==='Admin' && <div className="flex-container-1">

          <div>
            <Typography variant="h4">Additems</Typography>
          </div>

          <div>
            <FormControl className="LoginForm">
              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Title"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={newItem.title}
                />
              </div>

              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Description"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={newItem.description}
                />
              </div>

              <div>
                <TextField
                  className="formItems"
                  variant="outlined"
                  label="Price"
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={newItem.price}
                />
              </div>

              <div>
                <Button
                  className="formItems"
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Add item
                </Button>
              </div>

            </FormControl>
          </div>
        </div> }


      <div>
        <Typography variant="h4">Items List</Typography>
      </div>

      {<div className="itemsContainer">
        {items?.map((item, key) => {
          return (
            <div key={key}>
              <ItemsCard
                loggedUser = {loggedUser}
                handleDeleteItem={handleDeleteItem}
                handleAddtoCart={handleAddtoCart}
                cart={item}
              />
            </div>
          );
        })}
      </div>}
    </>
  );
};

export default Additems;
