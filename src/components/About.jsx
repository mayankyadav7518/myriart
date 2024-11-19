// import React from 'react';
// import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
// import { keyframes } from '@emotion/react';
// import pic from '../images/pic.jpeg';
// // Animations for text fade-in
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Animation for image scale-up
// const scaleIn = keyframes`
//   from {
//     transform: scale(0.9);
//     opacity: 0;
//   }
//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// `;

// const About = () => {
//   return (
//     <Box
//       sx={{
//         padding: '4rem 2rem',
//         backgroundColor: '#f9fafc',
//         textAlign: 'center',
//         overflow: 'hidden',
//         width: '100vw'
//       }}
//     >
//       {/* Top section heading */}
//       <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#343a40', marginTop: '40px' }}>
//         Welcome to Myriart Tech
//       </Typography>

//       <Typography
//         variant="subtitle1"
//         sx={{
//           fontSize: '1.2rem',
//           color: '#7F8C8D',
//           maxWidth: '600px',
//           margin: '1rem auto 3rem',
//           animation: `${fadeInUp} 1.2s ease-in-out`,
//         }}
//       >
//         We craft innovative digital solutions designed to help businesses grow, empower individuals, and transform industries.
//       </Typography>

//       {/* Team Image Section */}
//       <Grid
//         container
//         spacing={4}
//         justifyContent="center"
//         sx={{
//           maxWidth: '1200px',
//           margin: 'auto',
//           animation: `${fadeInUp} 1.5s ease-in-out`,
//         }}
//       >
//         <Grid item xs={12} sm={6} md={4}>
//           <Avatar
//             src={pic}
//             alt="Our Team"
//             sx={{
//                 width: '300px',
//                 height: '350px',
//               borderRadius: '15px',
//               animation: `${scaleIn} 2s ease-in-out`,
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Avatar
//             src={pic}
//             alt="Our Team"
//             sx={{
//               width: '300px',
//               height: '350px',
//               borderRadius: '15px',
//               animation: `${scaleIn} 2s ease-in-out 0.5s`,
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Avatar
//             src={pic}
//             alt="Our Team"
//             sx={{
//                 width: '300px',
//                 height: '350px',
//               borderRadius: '15px',
//               animation: `${scaleIn} 2s ease-in-out 1s`,
//             }}
//           />
//         </Grid>
//       </Grid>

//       {/* About Section Text */}
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 'bold',
//           marginTop: '3rem',
//           color: '#2C3E50',
//           animation: `${fadeInUp} 1.8s ease-in-out`,
//         }}
//       >
//         Our Story
//       </Typography>

//       <Typography
//         variant="body1"
//         sx={{
//           fontSize: '1.1rem',
//           color: '#7F8C8D',
//           maxWidth: '800px',
//           margin: '1rem auto',
//           lineHeight: 1.8,
//           animation: `${fadeInUp} 2s ease-in-out`,
//         }}
//       >
//         Myriart Tech was founded with a mission to revolutionize the way businesses and people interact with technology. Our team is passionate about creating cutting-edge products and services that push boundaries, transform experiences, and empower users.
//         From healthcare innovation to digital transformation, we’re committed to making the world a better, more connected place through the power of technology.
//       </Typography>

//       {/* CTA Button */}
//       <Button
//         variant="contained"
//         sx={{
//           marginTop: '3rem',
//           padding: '10px 30px',
//           backgroundColor: '#3498db',
//           '&:hover': {
//             backgroundColor: '#2980b9',
//           },
//           animation: `${fadeInUp} 2.2s ease-in-out`,
//         }}
//       >
//         Discover More
//       </Button>
//     </Box>
//   );
// };

// export default About;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid, Avatar, Card } from "@mui/material";
import { keyframes } from "@emotion/react";
import pic from "../images/pic.jpeg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import CountUp from "react-countup"; // Import CountUp

// Animations for text fade-in
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animation for image scale-up
const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;


const milestones = [
  {
    label: "Years in Business",
    value: 2,
    description:
      "Over a decade of providing cutting-edge technology solutions to our clients.",
  },
  {
    label: "Clients",
    value: 10,
    description:
      "We have successfully worked with more than 10 clients globally.",
  },
  {
    label: "Projects Delivered",
    value: 30,
    description:
      "We have delivered over 30 successful digital transformation projects.",
  },
];

const About = () => {

const navigate = useNavigate();
const handleGetInTouchClick = () => {
  navigate("/contact");
};

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        backgroundColor: "#fff",
        textAlign: "center",
        overflow: "hidden",
        width: "100vw",
      }}
    >
      {/* Top section heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#343a40", marginTop: "40px" }}
      >
        Welcome to Myriart Tech
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "1.2rem",
          color: "#7F8C8D",
          maxWidth: "600px",
          margin: "1rem auto 3rem",
          animation: `${fadeInUp} 1.2s ease-in-out`,
        }}
      >
        We craft innovative digital solutions designed to help businesses grow,
        empower individuals, and transform industries.
      </Typography>

      {/* Mission Statement */}
      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#2C3E50",
            animation: `${fadeInUp} 1.5s ease-in-out`,
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            color: "#7F8C8D",
            maxWidth: "800px",
            margin: "1rem auto",
            lineHeight: 1.8,
            animation: `${fadeInUp} 1.8s ease-in-out`,
          }}
        >
          At Myriart Tech, our mission is to revolutionize industries through
          innovative technology, building solutions that empower users, enhance
          experiences, and transform businesses. We are driven by our passion
          for pushing boundaries and delivering world-class digital products.
        </Typography>
      </Box>

      {/* Team Image Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          animation: `${fadeInUp} 1.5s ease-in-out`,
        }}
      >
        {[...Array(3)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ padding: "1rem", borderRadius: "15px" }}>
              <Avatar
                src={pic}
                alt="Team Member"
                sx={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "15px",
                  margin: "auto",
                  animation: `${scaleIn} 2s ease-in-out`,
                }}
              />
              <Typography
                variant="h6"
                sx={{ marginTop: "1rem", color: "#2C3E50" }}
              >
                John Doe
              </Typography>
              <Typography variant="body2" sx={{ color: "#7F8C8D" }}>
                Founder & CEO
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Core Values Section */}
      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#2C3E50",
            animation: `${fadeInUp} 2s ease-in-out`,
          }}
        >
          Our Core Values
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "1000px", margin: "3rem auto" }}
        >
          <Grid item xs={12} sm={4}>
            <Card
              sx={{ padding: "2rem", display: "flex", alignItems: "center" }}
            >
              <CheckCircleIcon
                sx={{ fontSize: "40px", color: "#3498db", marginRight: "1rem" }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2C3E50" }}
                >
                  Innovation
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "1rem", color: "#7F8C8D" }}
                >
                  We constantly seek new ways to innovate and drive
                  technological progress to make a lasting impact.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{ padding: "2rem", display: "flex", alignItems: "center" }}
            >
              <StarIcon
                sx={{ fontSize: "40px", color: "#3498db", marginRight: "1rem" }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2C3E50" }}
                >
                  Excellence
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "1rem", color: "#7F8C8D" }}
                >
                  We strive for excellence in every project we undertake,
                  ensuring top-quality results and satisfaction.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{ padding: "2rem", display: "flex", alignItems: "center" }}
            >
              <PeopleIcon
                sx={{ fontSize: "40px", color: "#3498db", marginRight: "1rem" }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2C3E50" }}
                >
                  Integrity
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "1rem", color: "#7F8C8D" }}
                >
                  We conduct business with the utmost integrity, ensuring
                  transparency and trust in all our dealings.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Milestones Section */}
      <Box sx={{ marginTop: "4rem", textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#2C3E50",
            animation: `${fadeInUp} 2.2s ease-in-out`,
          }}
        >
          Our Milestones
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "1000px", margin: "2rem auto" }}
        >
          {milestones.map((milestone, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ padding: "2rem", height: "100px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2C3E50" }}
                >
                  <CountUp start={0} end={milestone.value} duration={2} />+{" "}
                  {milestone.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "1rem", color: "#7F8C8D" }}
                >
                  {milestone.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Button */}
      <Box sx={{ marginTop: "4rem" }}>
        <Button
          onClick={handleGetInTouchClick}
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: "25px", padding: "1rem 2rem" }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};

export default About;
