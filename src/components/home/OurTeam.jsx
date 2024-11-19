import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import pic from "../../images/pic.jpeg";
import google from "../../images/google.jpg";
import microsoft from "../../images/microsoft.png";
import dcs from "../../images/dcs.jpg";

const teamMembers = [
  {
    name: "Mayank Yadav",
    designation: "Web Developer",
    company: "Digiquest Consultancy Services pvt. ltd.",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "JavaScript" },
      { name: "Material UI" },
    ],
    salary: "$90,000",
    imageUrl: pic,
    companyLogoUrl: dcs,
  },
  {
    name: "Olivia Kearney",
    designation: "Global Marketing Manager",
    company: "Microsoft",
    skills: [{ name: "Strategic Planning" }, { name: "Digital Marketing" }],
    salary: "$120,000",
    // imageUrl: pic,
    companyLogoUrl: google,
  },
  {
    name: "Brian Lavery",
    designation: "Head of Shopping Ads",
    company: "Google",
    skills: [{ name: "Ads Management" }, { name: "Campaign Strategies" }],
    salary: "$130,000",
    // imageUrl: pic,
    companyLogoUrl: microsoft,
  },
  {
    name: "Neil Patel",
    designation: "Founder",
    company: "Neil Patel Digital",
    skills: [
      { name: "SEO" },
      { name: "Content Marketing" },
      { name: "Growth Hacking" },
    ],
    salary: "$100,000",
    // imageUrl: pic,
    companyLogoUrl: google,
  },
];

const OurTeam = () => {
  return (
    <div
      style={{ padding: "2rem", backgroundColor: "#fff", textAlign: "center" }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2C3E50",
          mb: 9,
          mt: 9
        }}
      >
        Our Team Members
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                perspective: "1000px", // For 3D effect during flip
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px", // Uniform card height
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                  "&:hover": {
                    transform: "rotateY(180deg)", // Flip effect
                  },
                }}
              >
                {/* Front Side of the Card */}
                <Box
                  sx={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%", // Ensure full card height
                    zIndex: 2,
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 300,
                      margin: "0 auto",
                      borderRadius: "15px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      height: "100%", // Ensures card takes full height
                    }}
                  >
                    {/* Profile Picture with Gradient */}
                    <Box
                      sx={{
                        position: "relative",
                        padding: "10px",
                        display: "inline-block",
                      }}
                    >
                      <Box
                        sx={{
                          background:
                            "linear-gradient(45deg, #f093fb, #f5576c)",
                          borderRadius: "50%",
                          padding: "3px",
                          display: "inline-block",
                        }}
                      >
                        <Avatar
                          src={member.imageUrl}
                          alt={member.name}
                          sx={{
                            width: 120,
                            height: 120,
                            border: "2px solid white",
                          }}
                        />
                      </Box>
                      {/* Overlapping Company Logo */}
                      <Avatar
                        alt={member.company}
                        src={member.companyLogoUrl}
                        sx={{
                          width: 50,
                          height: 50,
                          position: "absolute",
                          bottom: "10px",
                          right: "-25px",
                          transform: "translateX(-50%)",
                          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </Box>

                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#333", fontWeight: "bold" }}
                      >
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {member.designation}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {member.company}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                {/* Back Side of the Card */}
                <Box
                  sx={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%", // Matches the front side's height
                    transform: "rotateY(180deg)",
                    zIndex: 1,
                    backgroundColor: "#3498db", // Back color
                    color: "white",
                    borderRadius: "15px",
                    padding: "20px",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        borderBottom: "2px solid white",
                        display: "inline-block",
                        mb: 2,
                      }}
                    >
                      Skills & Expertise
                    </Typography>

                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      {member.skills.map((skill) => (
                        <li key={skill.name}>
                          <Typography
                            variant="body2"
                            sx={{ marginTop: "10px", textAlign: "left" }}
                          >
                            {skill.name}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    <Typography
                      variant="h7"
                      component="div"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      Salary: {member.salary}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurTeam;
