// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/home/Navbar'; // Ensure this is correctly imported
// import HomePage from './components/home/HomePage';
// import About from '../src/components/About';
// import Services from '../src/components/Services';
// import OurProducts from '../src/components/OurProducts';
// import ContactPage from '../src/components/ContactPage';
// import Footer from '../src/components/Footer';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/ourproducts" element={<OurProducts />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;







// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/home/Navbar'; // Ensure this is correctly imported
// import HomePage from './components/home/HomePage';
// import About from '../src/components/About';
// import Services from '../src/components/Services';
// import OurProducts from '../src/components/OurProducts';
// import ContactPage from '../src/components/ContactPage';
// import Footer from '../src/components/Footer';
// import AuthBox from '../src/components/login/AuthBox'; // Import your AuthBox

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check local storage for a token to see if the user is already logged in
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = (token) => {
//     localStorage.setItem('authToken', token);
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       {isAuthenticated ? (
//         <>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/ourproducts" element={<OurProducts />} />
//           </Routes>
//           <Footer />
//         </>
//       ) : (
//         // If not authenticated, show the login/register page
//         <Routes>
//           <Route path="/*" element={<AuthBox onLogin={handleLogin} />} />
//         </Routes>
//       )}
//     </Router>
//   );
// };

// export default App;






import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import HomePage from './components/home/HomePage';
import About from './components/About';
import Services from './components/Services';
import OurProducts from './components/OurProducts';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AuthBox from './components/login/AuthBox';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);

  // Check local storage for a token to see if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      // Show AuthBox after 5 seconds if not authenticated
      const timer = setTimeout(() => {
        setShowAuthBox(true);
      }, 5000);

      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    setShowAuthBox(false); // Close AuthBox on successful login
  };

  const handleCloseAuthBox = () => {
    setShowAuthBox(false); // Close AuthBox
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ourproducts" element={<OurProducts />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ourproducts" element={<OurProducts />} />
          </Routes>
          {showAuthBox && <AuthBox onClose={handleCloseAuthBox} onLogin={handleLogin} />}
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
