// // src/components/Register.jsx
// import React, { useState } from 'react';
// import { Box, Button, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// const Register = () => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!mobile || !email || !password) {
//       setError('All fields are required!');
//     } else {
//       setError('');
//       // Handle successful registration
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit}>
//       {error && <Typography color="error" align="center">{error}</Typography>}
//       <TextField
//         variant="outlined"
//         required
//         fullWidth
//         label="Mobile Number"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//         type="tel"
//         margin="normal"
//       />
//       <TextField
//         variant="outlined"
//         required
//         fullWidth
//         label="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type={showPassword ? 'text' : 'password'}
//         margin="normal"
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton
//                 onClick={() => setShowPassword(!showPassword)}
//                 edge="end"
//               >
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
//       <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
//         Register
//       </Button>
//     </Box>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import { Box, Button, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';

const Register = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      setError('All fields are required!');
      setSuccess('');
    } else {
      setError('');
      try {
        // Construct the payload for registration
        const payload = new URLSearchParams();
        payload.append('mobile_number', mobile);
        payload.append('password', password);

        // Making the POST API call to register the user
        const response = await axios.post(`http://localhost:8000/myriart/register/`, payload);

        if (response.status === 200) {
          setSuccess('Registration successful!');
          setError('');
        } else {
          setError('Registration failed. Please try again.');
          setSuccess('');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setError('An error occurred. Please try again later.');
        setSuccess('');
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {error && <Typography color="error" align="center">{error}</Typography>}
      {success && <Typography color="primary" align="center">{success}</Typography>}
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        type="tel"
        margin="normal"
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={showPassword ? 'text' : 'password'}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
