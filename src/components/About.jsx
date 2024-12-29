
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
      padding: "4rem 0",
      backgroundColor: "#fff",
      textAlign: "center",
      alignContent: "center",
      overflowX: "hidden", 
      width: "100%", 
      maxWidth: "100%", 
    }}
    >
      {/* Top section heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#343a40", marginTop: "40px", fontSize: "32px" }}
      >
        Welcome to Myriart Tech
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "1.2rem",
          color: "#7F8C8D",
          // maxWidth: "600px",
          margin: "1rem 2rem",
          animation: `${fadeInUp} 1.2s ease-in-out`,
        }}
      >
        We craft innovative digital solutions designed to help businesses grow,
        empower individuals, and transform industries.
        At Myriart Tech, our mission is to revolutionize industries through
          innovative technology, building solutions that empower users, enhance
          experiences, and transform businesses. 
      </Typography>

      {/* Team Image Section */}
      {/* <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: "900px",
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
                  width: "150px",
                  height: "150px",
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
      </Grid> */}

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
          // spacing={4}
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
          // spacing={4}
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
