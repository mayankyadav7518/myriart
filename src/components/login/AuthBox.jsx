// import React, { useState } from 'react';
// import { Box, Button, Tabs, Tab, Typography, Paper, Container, TextField, InputAdornment, IconButton } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// const StyledContainer = styled(Container)(({ theme }) => ({
//   marginTop: '100px',
//   display: 'flex',
//   justifyContent: 'flex-end', // Align to the right on large screens
//   padding: '0', // Remove default padding
//   [theme.breakpoints.down('md')]: {
//     justifyContent: 'center', // Center on smaller screens
//   },
// }));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: '40px',
//   borderRadius: '12px',
//   boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
//   background: theme.palette.background.paper,
//   width: '100%',
//   maxWidth: '400px',
// }));

// const TabContainer = styled(Box)(({ theme }) => ({
//   marginBottom: '20px',
// }));

// const AuthBox = ({ onLogin, onRegister }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (activeTab === 0) {
//       // Registration logic
//       if (!mobile || !email || !password) {
//         setError('All fields are required!');
//       } else {
//         setError('');
//         onRegister(); // Call register function
//       }
//     } else {
//       // Login logic
//       if (email === 'test@example.com' && password === 'password') {
//         setError(''); // Clear error
//         onLogin(); // Call login function
//       } else {
//         setError('Invalid email or password!');
//       }
//     }
//   };

//   return (
//     <StyledContainer maxWidth="lg">
//       <StyledPaper elevation={3}>
//         <Typography variant="h4" align="center" gutterBottom>
//           {activeTab === 0 ? 'Register' : 'Login'}
//         </Typography>
//         <Tabs
//           value={activeTab}
//           onChange={(e, newValue) => setActiveTab(newValue)}
//           variant="fullWidth"
//         >
//           <Tab label="Register" />
//           <Tab label="Login" />
//         </Tabs>
//         <TabContainer component="form" onSubmit={handleSubmit}>
//           {error && <Typography color="error" align="center">{error}</Typography>}
//           {activeTab === 0 && (
//             <Box>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Mobile Number"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 type="tel"
//                 margin="normal"
//               />
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 margin="normal"
//               />
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type={showPassword ? 'text' : 'password'}
//                 margin="normal"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
//                 Register
//               </Button>
//             </Box>
//           )}
//           {activeTab === 1 && (
//             <Box>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 margin="normal"
//               />
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 label="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type={showPassword ? 'text' : 'password'}
//                 margin="normal"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
//                 Login
//               </Button>
//             </Box>
//           )}
//         </TabContainer>
//       </StyledPaper>
//     </StyledContainer>
//   );
// };

// export default AuthBox;




// // src/components/AuthBox.jsx
// import React, { useState } from 'react';
// import { Box, Tabs, Tab, Paper, Container, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Login from './Login';
// import Register from './Register';

// const StyledContainer = styled(Container)(({ theme }) => ({
//   marginTop: '100px',
//   display: 'flex',
//   justifyContent: 'flex-end', // Align to the right on large screens
//   padding: '0',
//   [theme.breakpoints.down('md')]: {
//     justifyContent: 'center', // Center on smaller screens
//   },
// }));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: '40px',
//   borderRadius: '12px',
//   boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
//   background: theme.palette.background.paper,
//   width: '100%',
//   maxWidth: '400px',
// }));

// const TabContainer = styled(Box)(({ theme }) => ({
//   marginBottom: '20px',
// }));

// const AuthBox = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <StyledContainer maxWidth="lg">
//       <StyledPaper elevation={3}>
//         <Typography variant="h4" align="center" gutterBottom>
//           {activeTab === 0 ? 'Register' : 'Login'}
//         </Typography>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//         >
//           <Tab label="Register" />
//           <Tab label="Login" />
//         </Tabs>
//         <TabContainer>
//           {activeTab === 0 ? <Register /> : <Login />}
//         </TabContainer>
//       </StyledPaper>
//     </StyledContainer>
//   );
// };

// export default AuthBox;







import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Login from './Login';
import Register from './Register';

const AuthBox = ({ onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Inline styles for popup
  const popupContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure the popup is above other elements
  };

  const popupStyle = {
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
    background: '#fff', // White background
    width: '100%',
    maxWidth: '400px',
    position: 'relative', // To position the close button
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#000',
  };

  return (
    <div style={popupContainerStyle}>
      <div style={popupStyle}>
      <Typography variant='h5' color='black'>Please Login to continue</Typography>
        <button style={closeButtonStyle} onClick={onClose}>
          &times; {/* Close button */}
        </button>
        <Typography variant="h4" align="center" gutterBottom>
          {activeTab === 0 ? 'Register' : 'Login'}
        </Typography>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Register" />
          <Tab label="Login" />
        </Tabs>
        <Box marginBottom="20px">
          {activeTab === 0 ? <Register onLogin={onLogin} /> : <Login onLogin={onLogin} />}
        </Box>
      </div>
    </div>
  );
};

export default AuthBox;
