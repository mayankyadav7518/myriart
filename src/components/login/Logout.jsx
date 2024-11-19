// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/myriart/logout/', { method: 'POST', credentials: 'include' });
      if (response.ok) {
        navigate('/'); // Redirect to home after successful logout
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div onClick={handleLogout} style={{ cursor: 'pointer' }}>
      Logout
    </div>
  );
}

export default Logout;
