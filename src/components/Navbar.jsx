import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';



const Navbar = ({loggedUser}) => {

//   const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate()

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    
  };

  

  const handleProfile=()=>{
    navigate('/userpage', {state : {loggedUser : loggedUser}})
  }

  const handleLogout=()=>{
    navigate('/signup')
  }

  const handleCartItem =()=>{
    navigate('/inventory', {state : {loggedUser : loggedUser}})
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" >
        <Toolbar>
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopify
          </Typography>

          <MenuItem onClick={handleCartItem}>
                  <Typography textAlign="center">{'Cart item'}</Typography>
                </MenuItem>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          {loggedUser.fname}
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar