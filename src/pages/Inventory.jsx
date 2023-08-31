import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ItemsCard2 from '../components/ItemsCard2'
import '../Styles/Inventory.css'
import { Typography } from '@mui/material'


const Inventory = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const loggedUserEmail = location.state.loggedUser.email;
  const loggedUser = JSON.parse(localStorage.getItem(loggedUserEmail))

  const [cart ,setCart] = useState(loggedUser.cartItems) 

  const handleDelete=(itemTitle)=>{
    const filteredCart = cart.filter((item,key)=>{
      return item.title !== itemTitle
    })
    setCart(filteredCart)
  }

  useEffect(()=>{
    const UpdatedUser = {...loggedUser, cartItems : cart}
    localStorage.setItem(`${loggedUser.email}`,JSON.stringify(UpdatedUser) )
  },[cart])

  return (


    <>
    <Typography variant='h1'>Cart Items</Typography>
    <div className='flex-container-1'></div>
    {/* <div>{loggedUser.email}</div> */}
    <div className="itemsContainer">
    {
      cart.map((item,key)=>{
        return (
          <div key={key}>
          <ItemsCard2
                handleDelete={handleDelete}
                item={item}
              />
            </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Inventory