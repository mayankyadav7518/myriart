import React from "react";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import pic from "../../images/pic.jpeg";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import icons

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, Digital Agency",
    testimonial:
      "Digital Marketing Institute has transformed our approach to online marketing. The insights are invaluable!",
    image: pic,
  },
  {
    name: "John Smith",
    title: "Head of Marketing, Company XYZ",
    testimonial:
      "The training we received was top-notch, and it has significantly improved our team's performance.",
    image: pic,
  },
  {
    name: "Alice Johnson",
    title: "Marketing Consultant",
    testimonial:
      "Their expertise in the digital landscape is unmatched. Highly recommend for any business looking to grow.",
    image: pic,
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: "40px 20px",
        mt: 4,
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2C3E50", 
          mb: 6,
        }}
      >
        What Our Clients Says{" "}
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                backgroundColor: "#f9f9f9", // Light background for contrast
                border: "1px solid #e0e0e0",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                component="img"
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  mb: 2,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  border: "3px solid #41B3A2", // Border for image
                }}
              />
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", color: "#555", mb: 2 }}
              >
                "{testimonial.testimonial}"
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2C3E50" }}
              >
                {testimonial.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                {testimonial.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
