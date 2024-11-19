// //Msg sending on Gmail
// //Msg sending on Gmail
// //Msg sending on Gmail

// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { styled } from "@mui/system";
// import SendIcon from "@mui/icons-material/Send";

// // Contact Form Styles
// const ContactFormContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "40px",
//   backgroundColor: "#fdfdfd",
//   borderRadius: "20px",
//   boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease-in-out",
//   animation: "fadeIn 0.9s ease-in-out",
//   "@keyframes fadeIn": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(20px)",
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },
// }));

// // Input Field Styles
// const ContactFormInput = styled(TextField)(({ theme }) => ({
//   width: "100%",
//   marginBottom: "20px",
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "10px",
//     backgroundColor: "#fff",
//     borderColor: "#ddd",
//     "&:hover": {
//       borderColor: "#41B3A2",
//     },
//     "&.Mui-focused": {
//       borderColor: "#41B3A2",
//     },
//   },
// }));

// // Button Styles
// const StyledButton = styled(Button)(({ theme }) => ({
//   width: "100%",
//   padding: "12px",
//   fontSize: "16px",
//   fontWeight: "bold",
//   textTransform: "uppercase",
//   color: "#fff",
//   backgroundColor: "#41B3A2",
//   borderRadius: "10px",
//   "&:hover": {
//     backgroundColor: "#0059b3",
//     transform: "scale(1.05)",
//   },
// }));

// // Main Component
// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [result, setResult] = useState(""); // To display form submission status

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResult("Sending...");

//     // Create FormData object and append the access key
//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("message", formData.message);
//     formDataToSend.append("access_key", "dc9fd223-340f-4627-8c87-b3bc6e9f52de");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formDataToSend,
//       });
//       const data = await response.json();

//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         setFormData({ name: "", email: "", message: "" }); // Clear form fields
//       } else {
//         setResult(data.message); // Display the error message
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setResult("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         minHeight: "100vh",
//         width: "100vw",
//         backgroundColor: "#f5f5f5",
//         mt: 6,
//         p: 2,
//       }}
//     >
//       {/* Grid Layout for responsiveness */}
//       <Grid container spacing={3}>
//         {/* Contact Form */}
//         <Grid
//           item
//           xs={12} // Full width on small screens
//           md={6} // Half-width on medium and larger screens
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <ContactFormContainer>
//             <Typography
//               variant="h4"
//               sx={{ mb: 4, fontWeight: "bold", color: "#333" }}
//             >
//               Get In Touch
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{ width: "100%" }}
//             >
//               <ContactFormInput
//                 label="Your Name"
//                 name="name"
//                 variant="outlined"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <ContactFormInput
//                 label="Your Email"
//                 name="email"
//                 variant="outlined"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 required
//               />
//               <ContactFormInput
//                 label="Your Message"
//                 name="message"
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//               <StyledButton
//                 type="submit"
//                 variant="contained"
//                 endIcon={<SendIcon />}
//               >
//                 Send Message
//               </StyledButton>
//             </Box>
//             {result && (
//               <Typography
//                 variant="body1"
//                 sx={{
//                   mt: 2,
//                   color: result.includes("Successfully") ? "green" : "red",
//                 }}
//               >
//                 {result}
//               </Typography>
//             )}
//           </ContactFormContainer>
//         </Grid>

//         {/* Google Map */}
//         <Grid
//           item
//           xs={12} // Full width on small screens
//           md={6} // Half-width on medium and larger screens
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Box
//             sx={{
//               width: "100%",
//               height: { xs: "300px", md: "500px" }, // Responsive height
//               borderRadius: "20px",
//               boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
//               backgroundColor: "#fff",
//               transition: "all 0.3s ease-in-out",
//               animation: "fadeIn 0.9s ease-in-out",
//               "@keyframes fadeIn": {
//                 "0%": {
//                   opacity: 0,
//                   transform: "translateY(20px)",
//                 },
//                 "100%": {
//                   opacity: 1,
//                   transform: "translateY(0)",
//                 },
//               },
//             }}
//           >
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.997060723578!2d-74.00601568459498!3d40.71277597933153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19ab830e49%3A0x1b68b11e95f4f037!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1638747076633!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{
//                 border: 0,
//                 borderRadius: "20px",
//               }}
//               allowFullScreen=""
//               loading="lazy"
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default ContactForm;

////Msg sending in Google Spreadsheet
////Msg sending in Google Spreadsheet
////Msg sending in Google Spreadsheet

// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { styled } from "@mui/system";
// import SendIcon from "@mui/icons-material/Send";
// import amazon from '../images/amazon.png';
// import dominos from '../images/dominos.png';
// import google from '../images/google.png';
// import microsoft from '../images/microsoftt.png';
// import pepsi from '../images/pepsi.png';
// import samsung from '../images/samsung.png';

// const ContactFormContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "40px",
//   backgroundColor: "#fdfdfd",
//   borderRadius: "20px",
//   boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease-in-out",
//   animation: "fadeIn 0.9s ease-in-out",
//   "@keyframes fadeIn": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(20px)",
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },
// }));

// // Input Field Styles
// const ContactFormInput = styled(TextField)(({ theme }) => ({
//   width: "100%",
//   marginBottom: "20px",
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "10px",
//     backgroundColor: "#fff",
//     borderColor: "#ddd",
//     "&:hover": {
//       borderColor: "#41B3A2",
//     },
//     "&.Mui-focused": {
//       borderColor: "#41B3A2",
//     },
//   },
// }));

// // Button Styles
// const StyledButton = styled(Button)(({ theme }) => ({
//   width: "100%",
//   padding: "12px",
//   fontSize: "16px",
//   fontWeight: "bold",
//   textTransform: "uppercase",
//   color: "#fff",
//   backgroundColor: "#41B3A2",
//   borderRadius: "10px",
//   "&:hover": {
//     backgroundColor: "#0059b3",
//     transform: "scale(1.05)",
//   },
// }));

// // Floating Brands Container Styles
// const BrandsContainer = styled(Box)(({ theme }) => ({
//   padding: "20px 0",
//   backgroundColor: "#fff",
//   borderRadius: "20px",
//   boxShadow: "0 12px 25px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   justifyContent: "space-around",
//   alignItems: "center",
//   width: "100%",
//   overflow: "hidden",
//   animation: "floatLeftToRight 20s infinite linear", // Floating animation
//   "@keyframes floatLeftToRight": {
//     "0%": {
//       transform: "translateX(-100%)",
//     },
//     "100%": {
//       transform: "translateX(100%)",
//     },
//   },
// }));

// const BrandLogo = styled("img")(({ theme }) => ({
//   width: "100px",
//   margin: "0 20px",
//   filter: "grayscale(100%)",
//   transition: "filter 0.3s ease-in-out",
//   "&:hover": {
//     filter: "none",
//   },
// }));

// // Main Component
// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     contact: "",
//   });
//   const [result, setResult] = useState(""); // To display form submission status

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResult("Sending...");

//     const scriptUrl =
//       "https://script.google.com/macros/s/AKfycby76iVMSusEUu53Zgs3Q5duW88tq2cvgIwjMA-bqlFWCXL98E_XcWUJBfU-tcRuCEW3/exec"; // Replace with your Google Apps Script URL

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("contact", formData.contact);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("message", formData.message);

//     try {
//       const response = await fetch(scriptUrl, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       if (data.result === "success") {
//         setResult("Form Submitted Successfully");
//         setFormData({ name: "", email: "", message: "", contact: "" });
//       } else {
//         setResult("Failed to submit the form");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setResult("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "100vh",
//         width: "100vw",
//         backgroundColor: "#f5f5f5",
//         p: 2,
//         mt: 6,
//       }}
//     >
//       {/* Header Section */}
//       <Box
//         sx={{
//           width: "100%",
//           textAlign: "center",
//           padding: "20px 0",
//           marginBottom: "20px",
//           backgroundColor: "#E9EFEC",
//         }}
//       >
//         <Typography
//           variant="h3"
//           color="black"
//           sx={{ fontWeight: "bold", marginBottom: "10px" }}
//         >
//           Contact Us
//         </Typography>
//         <Typography
//           variant="body1"
//           color="black"
//           sx={{ margin: "0 auto" }}
//         >
//           Please ensure to include detailed information when submitting your
//           inquiry. We guarantee a response from one of our representatives
//           shortly thereafter.
//         </Typography>
//       </Box>

//       {/* Contact Form Section */}
//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <ContactFormContainer>
//             <Typography
//               variant="h4"
//               sx={{ mb: 4, fontWeight: "bold", color: "#333" }}
//             >
//               Get In Touch
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{ width: "100%" }}
//             >
//               <ContactFormInput
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <ContactFormInput
//                 label="Contact Number"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 required
//               />
//               <ContactFormInput
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 required
//               />
//               <ContactFormInput
//                 label="Message"
//                 name="message"
//                 multiline
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//               <StyledButton
//                 type="submit"
//                 variant="contained"
//                 endIcon={<SendIcon />}
//               >
//                 Send Message
//               </StyledButton>
//             </Box>
//             {result && (
//               <Typography
//                 variant="body1"
//                 sx={{
//                   mt: 2,
//                   color: result.includes("Successfully") ? "green" : "red",
//                 }}
//               >
//                 {result}
//               </Typography>
//             )}
//           </ContactFormContainer>
//         </Grid>
//       </Grid>

//       {/* Brands Section Below the Contact Form */}
//       <Box sx={{ width: "100%", mt: 6 }}>
//         <BrandsContainer>
//           <BrandLogo src={amazon} alt="Amazon" />
//           <BrandLogo src={dominos} alt="Dominos" />
//           <BrandLogo src={google} alt="Google" />
//           <BrandLogo src={microsoft} alt="Microsoft" />
//           <BrandLogo src={pepsi} alt="Pepsi" />
//           <BrandLogo src={samsung} alt="Samsung" />
//         </BrandsContainer>
//       </Box>
//     </Box>
//   );
// }

// export default ContactForm;




import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import amazon from "../images/amazon.png";
import dominos from "../images/dominos.png";
import google from "../images/google.png";
import microsoft from "../images/microsoftt.png";
import pepsi from "../images/pepsi.png";
import samsung from "../images/samsung.png";

import india from "../images/india.png";
import australia from "../images/australia.png";
import canada from "../images/canada.png";
import france from "../images/france.png";
import korea from "../images/korea.png";
import usa from "../images/usa.png";
import russia from "../images/russia.png";
import austria from "../images/austria.png";
import finland from "../images/finland.png";
import london from "../images/london.png";

const ContactFormContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  border: "2px solid #A5B68D",
  marginTop: "50px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down('sm')]: {
    padding: "15px",
  },
}));

const ContactFormInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
    "&:hover": {
      borderColor: "#0059b3",
    },
    "&.Mui-focused": {
      borderColor: "#0059b3",
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "12px",
  backgroundColor: "#0059b3",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
  color: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#003d80",
  },
}));

const AwardsContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", // Responsive grid
  gap: "20px",
  justifyContent: "center",
  marginTop: "30px",
}));

const AwardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  margin: "0 auto",
  border: "2px solid #A5B68D",
}));

const CountriesContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: "50px",
  padding: "40px 20px",
  background: "url('src/images/map.png') no-repeat center center", 
  backgroundSize: "100% 60%", 
  position: "relative",
  zIndex: 1,
  minHeight: "400px", 
}));

const FlagGrid = styled(Grid)(({ theme }) => ({
  zIndex: 2, 
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)", 
  justifyContent: "center",
  gap: "20px", 
  "& img": {
    width: "70px", 
    height: "40px",
    margin: "10px",
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycby76iVMSusEUu53Zgs3Q5duW88tq2cvgIwjMA-bqlFWCXL98E_XcWUJBfU-tcRuCEW3/exec"; // Update your Google script URL here

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.result === "success") {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", contact: "", email: "", message: "" });
      } else {
        setResult("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#fff", padding: "20px", paddingTop: "60px" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ContactFormContainer>
            <Typography
              variant="h4"
              sx={{
                marginBottom: "20px",
                fontSize: { xs: "24px", md: "28px" }, // Responsive font size
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "20px",
                color: "#666",
                fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                textAlign: "center",
              }}
            >
              Request a free consultation and get a no-obligation quote for your
              project within 8 business hours.
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <ContactFormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <ContactFormInput
                label="Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <ContactFormInput
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />
              <ContactFormInput
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
              <SubmitButton
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Submit Now
              </SubmitButton>
            </Box>
            {result && (
              <Typography
                variant="body2"
                sx={{
                  marginTop: "20px",
                  color: result.includes("Successfully") ? "green" : "red",
                }}
              >
                {result}
              </Typography>
            )}
          </ContactFormContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              padding: "40px",
              backgroundColor: "#161D6F",
              borderRadius: "10px",
              marginTop: "50px",
              height: "auto", // Make height auto for responsiveness
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Awards & Recognitions
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "10px", marginBottom: "20px" }}
            >
              Showcasing some of our noteworthy recent accomplishments when we
              helped build startups and upscale established enterprises.
            </Typography>
            <AwardsContainer>
              <AwardImage src={amazon} alt="Clutch Award" />
              <AwardImage src={dominos} alt="IT Rated" />
              <AwardImage src={pepsi} alt="Top Company" />
              <AwardImage src={samsung} alt="Business Firms" />
              <AwardImage src={google} alt="Good Firms" />
              <AwardImage src={microsoft} alt="Good Firms" />
            </AwardsContainer>
            <Typography
              component="div"
              sx={{
                marginTop: "20px",
                paddingTop: "20px",
                color: "#fff",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                fontSize: { xs: "14px", md: "18px" }, // Responsive font size
                flexWrap: "wrap", // Allows items to wrap in smaller screens
              }}
            >
              <Box sx={{ textAlign: "center", flex: "1 1 100px" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "36px" } }} // Responsive font size
                >
                  200+
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "12px", md: "16px" } }} // Responsive font size
                >
                  Expert Engineers
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", flex: "1 1 100px" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "36px" } }} // Responsive font size
                >
                  500+
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "12px", md: "16px" } }} // Responsive font size
                >
                  Happy Clients
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", flex: "1 1 100px" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "36px" } }} // Responsive font size
                >
                  10+
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "12px", md: "16px" } }} // Responsive font size
                >
                  Awards Won
                </Typography>
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid>
        <CountriesContainer>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "32px" },
            marginBottom: "20px",
            paddingBottom: "40px",
            color: "black",
          }}
        >
          Countries We Serve
        </Typography>

        <FlagGrid container justifyContent="center">
          <Grid item>
            <img src={france} alt="US Flag" />
          </Grid>
          <Grid item>
            <img src={australia} alt="UK Flag" />
          </Grid>
          <Grid item>
            <img src={canada} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={india} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={korea} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={usa} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={russia} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={austria} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={finland} alt="India Flag" />
          </Grid>
          <Grid item>
            <img src={london} alt="India Flag" />
          </Grid>
        </FlagGrid>
      </CountriesContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
