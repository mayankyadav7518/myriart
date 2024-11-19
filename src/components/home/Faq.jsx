// FAQSection.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQSection = () => {
    const faqs = [
        {
          question: "What services do you offer?",
          answer: "We offer a variety of digital marketing services including SEO, content creation, social media management, and more.",
        },
        {
          question: "How can I get started?",
          answer: "You can start by contacting us through our website or signing up for a consultation.",
        },
        {
          question: "What is your pricing model?",
          answer: "Our pricing varies based on the services required. Please contact us for a detailed quote.",
        },
        {
          question: "Do you provide customized solutions?",
          answer: "Yes, we tailor our services to meet the specific needs of your business.",
        },
        {
          question: "How long does it take to see results?",
          answer: "Results can vary based on the service and business goals. Typically, you can start seeing results in a few months.",
        },
        {
          question: "Can I track my project's progress?",
          answer: "Absolutely! We provide regular updates and reports so you can track the progress of your projects.",
        },
      ];

  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ textAlign: "center", color: "#16325B", mb: 4 }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
