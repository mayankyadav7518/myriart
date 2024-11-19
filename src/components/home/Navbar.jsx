// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { styled } from '@mui/material/styles';

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: '#41B3A2', // Primary background color of the navbar
//   width: '100%',
//   margin: 0,
// }));

// function Navbar() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation(); // Get the current location

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleNavigation = (path) => {
//     setAnchorEl(null);
//     navigate(path);
//   };

//   // Styles for buttons
//   const buttonStyles = {
//     color: '#fff',
//     textTransform: 'none',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     borderRadius: '8px',
//     padding: '8px 16px',
//     transition: 'all 0.3s ease-in-out',
//     '&:hover': {
//       backgroundColor: '#0059b3',
//       color: '#FFD700',
//       transform: 'scale(1.05)',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//     },
//     '&:active': {
//       backgroundColor: '#1565c0',
//       color: '#FFFFFF',
//       boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.3)',
//       transform: 'scale(0.98)',
//     },
//   };

//   // Custom style for active button
//   const getActiveButtonStyles = (path) => {
//     return location.pathname === path
//       ? {
//           backgroundColor: '#FFD700', // Highlight color for active button
//           color: '#0059b3',
//         }
//       : {};
//   };

//   return (
//     <StyledAppBar position="fixed">
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '5%' }}>
//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//           Myriart Tech
//         </Typography>
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
//           <Button
//             sx={{ ...buttonStyles, ...getActiveButtonStyles('/') }}
//             to='/'
//             component={Link}
//           >
//             Home
//           </Button>
//           <Button
//             sx={{ ...buttonStyles, ...getActiveButtonStyles('/about') }}
//             to='/about'
//             component={Link}
//           >
//             About
//           </Button>
//           <Button
//             sx={{ ...buttonStyles, ...getActiveButtonStyles('/services') }}
//             to='/services'
//             component={Link}
//           >
//             Services
//           </Button>
//           <Button
//             sx={{ ...buttonStyles, ...getActiveButtonStyles('/ourproducts') }}
//             to='/ourproducts'
//             component={Link}
//           >
//             Our Products
//           </Button>
//           <Button
//             sx={{ ...buttonStyles, ...getActiveButtonStyles('/contact') }}
//             to='/contact'
//             component={Link}
//           >
//             Contact Us
//           </Button>
//         </Box>
//         <IconButton color="inherit" edge="end" onClick={handleMenuClick}>
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//         <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
//         <MenuItem onClick={() => handleNavigation('/about')}>About</MenuItem>
//         <MenuItem onClick={() => handleNavigation('/services')}>Services</MenuItem>
//         <MenuItem onClick={() => handleNavigation('/contact')}>Contact</MenuItem>
//       </Menu>
//     </StyledAppBar>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#41B3A2", // Primary background color of the navbar
  width: "100%",
  margin: 0,
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    setAnchorEl(null);
    navigate(path);
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("/logout/", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        navigate("/"); // Redirect to home after successful logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
    setAnchorEl(null); // Close the menu after logout
  };

  // Styles for buttons
  const buttonStyles = {
    color: "#fff",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "8px 16px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#0059b3",
      color: "#FFD700",
      transform: "scale(1.05)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      backgroundColor: "#1565c0",
      color: "#FFFFFF",
      boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.3)",
      transform: "scale(0.98)",
    },
  };

  // Custom style for active button
  const getActiveButtonStyles = (path) => {
    return location.pathname === path
      ? {
          backgroundColor: "#FFD700", // Highlight color for active button
          color: "#0059b3",
        }
      : {};
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "5%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Myriart Tech
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button
            sx={{ ...buttonStyles, ...getActiveButtonStyles("/") }}
            to="/"
            component={Link}
          >
            Home
          </Button>
          <Button
            sx={{ ...buttonStyles, ...getActiveButtonStyles("/about") }}
            to="/about"
            component={Link}
          >
            About
          </Button>
          <Button
            sx={{ ...buttonStyles, ...getActiveButtonStyles("/services") }}
            to="/services"
            component={Link}
          >
            Services
          </Button>
          <Button
            sx={{ ...buttonStyles, ...getActiveButtonStyles("/ourproducts") }}
            to="/ourproducts"
            component={Link}
          >
            Our Products
          </Button>
          <Button
            sx={{ ...buttonStyles, ...getActiveButtonStyles("/contact") }}
            to="/contact"
            component={Link}
          >
            Contact Us
          </Button>
        </Box>
        <IconButton color="inherit" edge="end" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            width: "150px", // Set the desired width here
          },
        }}
      >
        <MenuItem onClick={() => handleNavigation("/")}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigation("/about")}>About</MenuItem>
        <MenuItem onClick={() => handleNavigation("/services")}>
          Services
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/contact")}>
          Contact
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </StyledAppBar>
  );
}

export default Navbar;
