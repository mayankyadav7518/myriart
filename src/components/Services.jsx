import React from 'react';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';
// import { AccessAlarm, BookOnline, HealthAndSafety, LocalPharmacy, RoomService, SupportAgent } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CreateIcon from '@mui/icons-material/Create';
import CloudIcon from '@mui/icons-material/Cloud';


const servicesData = [
  {
    title: 'Web Development',
    description: 'Expert advice from certified professionals in various fields. Schedule your consultation today!',
    icon: <CodeIcon sx={{ fontSize: 50, color: '#007bff' }} />,
  },
  {
    title: 'UI/UX Design',
    description: 'Easily book appointments online at your convenience. No more waiting in line!',
    icon: <DesignServicesIcon sx={{ fontSize: 50, color: '#28a745' }} />,
  },
  {
    title: 'Social Media Marketing',
    description: 'Receive medical consultations via secure video calls. Connect with our specialists from anywhere.',
    icon: <CampaignIcon sx={{ fontSize: 50, color: '#ffc107' }} />,
  },
  {
    title: 'SEO Services',
    description: 'Track your health metrics with our advanced tools. Stay informed about your health status.',
    icon: <TrendingUpIcon sx={{ fontSize: 50, color: '#dc3545' }} />,
  },
  {
    title: 'Content Writing',
    description: '24/7 emergency assistance available at your fingertips. We are here to help you in critical situations.',
    icon: <CreateIcon sx={{ fontSize: 50, color: '#17a2b8' }} />,
  },
  {
    title: 'Cloud Services',  // New service
    description: 'Seamlessly manage your data in the cloud with our cutting-edge cloud solutions.',
    icon: <CloudIcon sx={{ fontSize: 50, color: '#6c757d' }} />,  // New icon for cloud services
  },
];

const Services = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#fff' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#343a40', marginTop: '70px' }}>
        Our Services
      </Typography>
      <Typography variant="body1" align="center" sx={{ color: '#6c757d', marginBottom: 4 }}>
        We offer a wide range of services tailored to meet your needs. Explore our offerings below:
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', borderRadius: '8px', backgroundColor: '#ffffff' }}>
              {service.icon}
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2, fontWeight: 'bold', color: '#343a40' }}>
                {service.title}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
