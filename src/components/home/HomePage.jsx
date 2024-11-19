// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Typography, Button, Container, Grid, Card } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import StarIcon from "@mui/icons-material/Star";
// import PeopleIcon from "@mui/icons-material/People";
// import BusinessIcon from "@mui/icons-material/Business";
// import WorkIcon from "@mui/icons-material/Work";
// import Cards from "./Cards";
// import Testimonials from "./Testimonials";
// import OurTeam from "./OurTeam";
// import Faq from "./Faq";
// import { keyframes } from "@mui/system"; // Ensure you import keyframes for animations
// import CountUp from "react-countup"; // Import CountUp

// function HomePage() {
//   const navigate = useNavigate();

//   const handleGetStartedClick = () => {
//     navigate("/contact");
//   };

//   const fadeInUp = keyframes`
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   `;

//   const milestoneIcons = [<BusinessIcon />, <PeopleIcon />, <WorkIcon />];

//   const milestones = [
//     {
//       label: "Years in Business",
//       value: 2,
//       description:
//         "Over a decade of providing cutting-edge technology solutions to our clients.",
//     },
//     {
//       label: "Clients",
//       value: 10,
//       description:
//         "We have successfully worked with more than 10 clients globally.",
//     },
//     {
//       label: "Projects Delivered",
//       value: 30,
//       description:
//         "We have delivered over 30 successful digital transformation projects.",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#fff",
//         padding: "80px 0",
//         width: "100vw",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Hero Section */}
//         <Box sx={{ mb: 8, padding: { xs: "20px", md: "60px" } }}>
//           <Grid container spacing={4} alignItems="center">
//             {/* Left side: Text */}
//             <Grid item xs={12} md={9}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#16325B",
//                   mb: 2,
//                   textAlign: "left",
//                   lineHeight: "1.2",
//                 }}
//               >
//                 Digital Solutions <br />
//                 <Typography
//                   component="span"
//                   variant="h2"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#41B3A2",
//                     mb: 2,
//                     textAlign: "left",
//                   }}
//                 >
//                   for Your Business Growth
//                 </Typography>
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: "300",
//                   color: "#001F3F",
//                   maxWidth: "700px",
//                   textAlign: "left",
//                 }}
//               >
//                 We offer a comprehensive range of{" "}
//                 <strong>digital marketing services</strong> to help your
//                 business thrive online. From social media management to SEO,
//                 website design, and content creation,{" "}
//                 <strong>we've got you covered.</strong>
//               </Typography>
//               <Button
//                 variant="contained"
//                 onClick={handleGetStartedClick}
//                 sx={{
//                   mt: 4,
//                   backgroundColor: "#41B3A2",
//                   padding: "10px 20px",
//                   fontSize: "18px",
//                   "&:hover": { backgroundColor: "#0D7C66" },
//                 }}
//               >
//                 Get Started <ArrowForwardIcon sx={{ ml: 1 }} />
//               </Button>
//             </Grid>

//             {/* Right side: Video */}
//             <Grid item xs={12} md={3}>
//               <Box sx={{ textAlign: "right" }}>
//                 <img
//                   src="/path-to-your-animation.gif"
//                   alt="Animated Services"
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     borderRadius: "8px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box
//           sx={{
//             textAlign: "center",
//             padding: "1rem",
//             overflowX: "hidden", // Ensure no horizontal scroll on small screens
//           }}
//         >
//           {/* Title */}
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               color: "#2C3E50",
//               mb: "2rem",
//             }}
//           >
//             Our Core Values
//           </Typography>

//           {/* Core Values Section */}
//           <Grid
//             container
//             spacing={4}
//             justifyContent="center"
//             sx={{
//               width: "100%",
//               margin: "0 auto",
//               padding: { xs: "1rem", sm: "2rem", md: "3rem" }, // Adjust padding based on screen size
//             }}
//           >
//             {[
//               {
//                 Icon: CheckCircleIcon,
//                 title: "Innovation",
//                 description:
//                   "We constantly seek new ways to innovate and drive technological progress to make a lasting impact.",
//               },
//               {
//                 Icon: StarIcon,
//                 title: "Excellence",
//                 description:
//                   "We strive for excellence in every project we undertake, ensuring top-quality results and satisfaction.",
//               },
//               {
//                 Icon: PeopleIcon,
//                 title: "Integrity",
//                 description:
//                   "We conduct business with the utmost integrity, ensuring transparency and trust in all our dealings.",
//               },
//             ].map(({ Icon, title, description }, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   sx={{
//                     padding: "2rem",
//                     display: "flex",
//                     alignItems: "center",
//                     height: "100%",
//                     justifyContent: "center",
//                     textAlign: "left",
//                   }}
//                 >
//                   <Icon
//                     sx={{
//                       fontSize: "40px",
//                       color: "#3498db",
//                       marginRight: "1rem",
//                     }}
//                   />
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{ fontWeight: "bold", color: "#2C3E50" }}
//                     >
//                       {title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{ marginTop: "1rem", color: "#7F8C8D" }}
//                     >
//                       {description}
//                     </Typography>
//                   </Box>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           <Grid
//             container
//             spacing={4}
//             justifyContent="center"
//             sx={{
//               width: "100%",
//               margin: "0 auto",
//               padding: { xs: "1rem", sm: "2rem", md: "3rem" },
//             }}
//           >
//             {milestones.map((milestone, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   sx={{
//                     padding: "2rem",
//                     height: "180px",
//                     textAlign: "center",
//                   }}
//                 >
//                   <Box sx={{ fontSize: "3rem", color: "#3498db" }}>
//                     {milestoneIcons[index]}
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: "bold", color: "#2C3E50" }}
//                   >
//                     <CountUp start={0} end={milestone.value} duration={2} />+{" "}
//                     {milestone.label}
//                   </Typography>

//                   <Typography
//                     variant="body2"
//                     sx={{ marginTop: "1rem", color: "#7F8C8D" }}
//                   >
//                     {milestone.description}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         <Cards />
//         <OurTeam />
//         <Testimonials />
//         <Faq />
//       </Container>
//     </Box>
//   );
// }

// export default HomePage;









import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container, Grid, Card } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import Cards from "./Cards";
import Testimonials from "./Testimonials";
import OurTeam from "./OurTeam";
import Faq from "./Faq";
import { keyframes } from "@mui/system"; // Ensure you import keyframes for animations
import CountUp from "react-countup"; // Import CountUp

function HomePage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

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

  const milestoneIcons = [<BusinessIcon />, <PeopleIcon />, <WorkIcon />];

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "80px 0",
        width: "100vw",
      }}
    >
      <Container maxWidth="lg" style={{overflow: 'hidden'}}>
        <Box sx={{ mb: 8, padding: { xs: "20px", md: "60px" } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={9}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#16325B",
                  mb: 2,
                  textAlign: "left",
                  lineHeight: "1.2",
                }}
              >
                Digital Solutions <br />
                <Typography
                  component="span"
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#41B3A2",
                    mb: 2,
                    textAlign: "left",
                  }}
                >
                  for Your Business Growth
                </Typography>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "300",
                  color: "#001F3F",
                  maxWidth: "700px",
                  textAlign: "left",
                }}
              >
                We offer a comprehensive range of{" "}
                <strong>digital marketing services</strong> to help your
                business thrive online. From social media management to SEO,
                website design, and content creation,{" "}
                <strong>we've got you covered.</strong>
              </Typography>
              <Button
                variant="contained"
                onClick={handleGetStartedClick}
                sx={{
                  mt: 4,
                  backgroundColor: "#41B3A2",
                  padding: "10px 20px",
                  fontSize: "18px",
                  "&:hover": { backgroundColor: "#0D7C66" },
                }}
              >
                Get Started <ArrowForwardIcon sx={{ ml: 1 }} />
              </Button>
            </Grid>

            {/* Right side: Video */}
            {/* <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: "right" }}>
                <img
                  src="/path-to-your-animation.gif"
                  alt="Animated Services"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Box>
            </Grid> */}
          </Grid>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            padding: "1rem",
            overflowX: "hidden", // Ensure no horizontal scroll on small screens
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#2C3E50",
              mb: "2rem",
            }}
          >
            Our Core Values
          </Typography>

          {/* Core Values Section */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{
              width: "100%",
              margin: "0 auto",
              padding: { xs: "1rem", sm: "2rem", md: "3rem" }, // Adjust padding based on screen size
            }}
          >
            {[
              {
                Icon: CheckCircleIcon,
                title: "Innovation",
                description:
                  "We constantly seek new ways to innovate and drive technological progress to make a lasting impact.",
              },
              {
                Icon: StarIcon,
                title: "Excellence",
                description:
                  "We strive for excellence in every project we undertake, ensuring top-quality results and satisfaction.",
              },
              {
                Icon: PeopleIcon,
                title: "Integrity",
                description:
                  "We conduct business with the utmost integrity, ensuring transparency and trust in all our dealings.",
              },
            ].map(({ Icon, title, description }, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: "40px",
                      color: "#3498db",
                      marginRight: "1rem",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#2C3E50" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "1rem", color: "#7F8C8D" }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{
              width: "100%",
              margin: "0 auto",
              padding: { xs: "1rem", sm: "2rem", md: "3rem" },
            }}
          >
            {milestones.map((milestone, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    padding: "2rem",
                    height: "180px",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ fontSize: "3rem", color: "#3498db" }}>
                    {milestoneIcons[index]}
                  </Box>

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

        <Cards />
        <OurTeam />
        <Testimonials />
        <Faq />
      </Container>
    </Box>
  );
}

export default HomePage;
