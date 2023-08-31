import React from 'react'
import Navbar from '../components/Navbar'
import Additems from '../components/Additems'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {

  const location = useLocation()
  
  const loggedEmail = location.state.loggedEmail
  // console.log(location.state.loggedEmail)

  // console.log(JSON.parse(localStorage.getItem(`${loggedEmail}`)))
  

  const loggedUser = JSON.parse(localStorage.getItem(`${loggedEmail}`));


  return (
    <>
    
    <Navbar loggedUser = {loggedUser}/>
    <Additems loggedUser= {loggedUser} />
    </>
  )
}

export default Dashboard