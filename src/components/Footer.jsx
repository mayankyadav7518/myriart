import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom"; // Ensure this import is correct
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#001F3F", color: "#fff", py: 6, px: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Home
          </Link>
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Services
          </Link>
          <Link
            to="/ourproducts"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Our Products
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Contact Us
          </Link>
        </Grid>

        {/* Company Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            We are a leading technology company offering a wide range of
            services and solutions that empower the businesses and individuals
            globally. Our mission is to innovate and lead the digital
            transformation.
          </Typography>
        </Grid>

        {/* Contact & Social Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", mb: 1 }}>
            Address: Gorakhpur, Uttar Pradesh, India
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", mb: 1 }}>
            E-mail: mayankkumar11.2015@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", mb: 1 }}>
            Phone: +91 7518868219
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Social Media
          </Typography>
          <Link
            to="https://www.facebook.com/profile.php?id=100012674040698"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center", // Align icon and text vertically
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} /> Facebook
          </Link>
          <Link
            to="https://www.youtube.com/@real_safar_751"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <YouTubeIcon sx={{ mr: 1 }} /> YouTube
          </Link>
          <Link
            to="https://www.linkedin.com/in/mayank-yadav-a38876220/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#bbb",
              display: "block",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
          </Link>
          <Link
            to="https://www.instagram.com/yaduvanshi_mayank_01/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#bbb",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InstagramIcon sx={{ mr: 1 }} /> Instagram
          </Link>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{ textAlign: "center", mt: 4, borderTop: "1px solid #444", pt: 2 }}
      >
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
