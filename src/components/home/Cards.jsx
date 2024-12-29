import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handlePricing = () => {
    navigate("/contact");
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
    <Box sx={{ mt: 10 }}>
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
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: "#D1E9F6",
                padding: "20px",
                borderRadius: "10px",
                color: "#333",
                textAlign: "center",
                height: "90%",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                marginRight: "20px",
              }}
            >
              <Box
                component="img"
                src={card.imageUrl}
                alt={card.title}
                sx={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  margin: "0 auto 20px",
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {card.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 2 }}>
                {card.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
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

      {/* Service Modal */}
      <Dialog
        open={openService}
        onClose={handleCloseService}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{currentService.title}</DialogTitle>
        <DialogContent>{currentService.details}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseService}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Pricing Modal */}
      {/* Pricing Modal */}
      <Dialog
        open={openPricing}
        onClose={handleClosePricing}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{currentPricing.title} Pricing</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Price: {currentPricing.pricing}</Typography>
          <ul>
            {currentPricing.features.map((feature, index) => (
              <li key={index}>
                <Typography>{feature}</Typography>
              </li>
            ))}
          </ul>
          {/* Request Pricing Button */}
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#0072ff",
              "&:hover": { backgroundColor: "#0059b3" },
            }}
            onClick={handlePricing} // Call the handlePricing function
          >
            Request Quote
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePricing}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cards;
