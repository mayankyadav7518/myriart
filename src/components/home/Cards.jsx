import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import smm from "../../images/smm.png";
import seo from "../../images/seo.webp";
import wd from "../../images/wd.jpg";
import cw from "../../images/cw.jpg";
import uiux from "../../images/uiux.jpg";

const Cards = () => {
  const [openService, setOpenService] = useState(false);
  const [openPricing, setOpenPricing] = useState(false);
  const [currentService, setCurrentService] = useState({
    title: "",
    details: "",
  });
  const [currentPricing, setCurrentPricing] = useState({
    title: "",
    pricing: "",
    features: [],
  });

  const cardData = [
    {
      title: "Web Development",
      description:
        "Create stunning websites that offer a seamless user experience.",
      imageUrl: wd,
      details: (
        <>
          <Typography paragraph>
            Our web development services encompass a wide range of solutions:
          </Typography>
          <ul>
            <li>Custom web application development</li>
            <li>Responsive and adaptive design</li>
            <li>Content Management Systems (CMS)</li>
            <li>E-commerce solutions</li>
            <li>Website maintenance and support</li>
          </ul>
        </>
      ),
      pricing: "$2000 - $5000",
      features: [
        "Custom design and development",
        "SEO optimization",
        "Mobile responsiveness",
        "1 year of maintenance",
        "Hosting for 6 months",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Create intuitive user interfaces and enhance user experiences.",
      imageUrl: uiux,
      details: (
        <>
          <Typography paragraph>
            Our UI/UX design services focus on creating user-centered designs:
          </Typography>
          <ul>
            <li>User research and persona creation</li>
            <li>Wireframing and prototyping</li>
            <li>Visual design and branding</li>
            <li>User testing and feedback analysis</li>
            <li>Responsive design for all devices</li>
          </ul>
        </>
      ),
      pricing: "$1500 - $4000",
      features: [
        "User persona development",
        "High-fidelity prototypes",
        "Visual assets and branding",
        "Usability testing",
        "Style guide creation",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Maximize your online presence with effective social media strategies.",
      imageUrl: smm,
      details: (
        <>
          <Typography paragraph>
            Our social media marketing strategies include:
          </Typography>
          <ul>
            <li>Content creation and scheduling</li>
            <li>Audience engagement and community building</li>
            <li>Social media advertising</li>
            <li>Analytics and performance tracking</li>
            <li>Brand reputation management</li>
          </ul>
        </>
      ),
      pricing: "$1000 - $3000",
      features: [
        "Social media audit",
        "Content calendar creation",
        "Monthly performance reports",
        "Ad campaign management",
        "Crisis management support",
      ],
    },
    {
      title: "SEO Services",
      description:
        "Boost your website's search engine rankings with our expert SEO services.",
      imageUrl: seo,
      details: (
        <>
          <Typography paragraph>
            Our SEO services focus on improving your visibility:
          </Typography>
          <ul>
            <li>Keyword research and optimization</li>
            <li>On-page and off-page SEO strategies</li>
            <li>Technical SEO audits</li>
            <li>Link building and outreach</li>
            <li>Regular performance reporting</li>
          </ul>
        </>
      ),
      pricing: "$800 - $2500",
      features: [
        "Keyword strategy",
        "Content optimization",
        "Backlink strategy",
        "Monthly reporting",
        "Competitor analysis",
      ],
    },
    {
      title: "Content Writing",
      description:
        "Engage your audience with compelling and informative content.",
      imageUrl: cw,
      details: (
        <>
          <Typography paragraph>Our content writing services offer:</Typography>
          <ul>
            <li>Blog and article writing</li>
            <li>Website content and product descriptions</li>
            <li>Copywriting for ads and promotions</li>
            <li>Social media content</li>
            <li>Editing and proofreading services</li>
          </ul>
        </>
      ),
      pricing: "$300 - $1500",
      features: [
        "SEO-optimized content",
        "Multiple revisions",
        "Content strategy",
        "Promotion support",
        "Timely delivery",
      ],
    },
  ];

  const handleOpenService = (service) => {
    setCurrentService(service);
    setOpenService(true);
  };

  const handleCloseService = () => {
    setOpenService(false);
  };

  const handleOpenPricing = (service) => {
    setCurrentPricing({
      title: service.title,
      pricing: service.pricing,
      features: service.features,
    });
    setOpenPricing(true);
  };

  const handleClosePricing = () => {
    setOpenPricing(false);
  };

  return (
    <Box sx={{ mt: 10, overflow: "hidden", position: "relative" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2C3E50",
          mb: 6,
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          animation: "slide 15s linear infinite",
          "@keyframes slide": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        <Grid container spacing={4} sx={{ flexWrap: "nowrap" }}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "#D1E9F6",
                  padding: "20px",
                  borderRadius: "10px",
                  color: "#333",
                  textAlign: "center",
                  minWidth: "300px",
                  height: "100%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={card.imageUrl}
                  alt={card.title}
                  sx={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {card.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                  {card.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0072ff",
                      "&:hover": { backgroundColor: "#0059b3" },
                    }}
                    onClick={() => handleOpenService(card)}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#0072ff",
                      borderColor: "#0072ff",
                      "&:hover": { borderColor: "#0059b3", color: "#0059b3" },
                    }}
                    onClick={() => handleOpenPricing(card)}
                  >
                    Pricing
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal for Service Details */}
      <Dialog
        open={openService}
        onClose={handleCloseService}
        PaperProps={{
          style: {
            borderRadius: "20px",
            overflow: "hidden",
            minWidth: "400px",
            maxWidth: "800px",
          },
        }}
        sx={{ backdropFilter: "blur(5px)" }}
      >
        <DialogTitle sx={{ backgroundColor: "#41B3A2", color: "#fff" }}>
          {currentService.title}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f0f4ff", padding: "30px" }}>
          {currentService.details}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseService}
            sx={{ color: "#fff", backgroundColor: "#0072ff", mx: "auto" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for Pricing Details */}
      <Dialog
        open={openPricing}
        onClose={handleClosePricing}
        PaperProps={{
          style: {
            borderRadius: "20px",
            overflow: "hidden",
            minWidth: "400px",
            maxWidth: "800px",
          },
        }}
        sx={{ backdropFilter: "blur(5px)" }}
      >
        <DialogTitle sx={{ backgroundColor: "#ff7043", color: "#fff" }}>
          {currentPricing.title} Pricing
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#ffe5e0", padding: "30px" }}>
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Price: {currentPricing.pricing}
          </Typography>
          <ul>
            {currentPricing.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClosePricing}
            sx={{ color: "#fff", backgroundColor: "#ff7043", mx: "auto" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cards;
