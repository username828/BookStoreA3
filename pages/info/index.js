import Link from "next/link";
import { Container, Typography, Box, Link as MuiLink } from "@mui/material";

export default function InfoPage() {
  return (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Information Page
      </Typography>
      <Typography >
        Welcome to the BookStore Information Center! Here, you can find answers to common questions, browse support resources, and learn more about how to make the most of your BookStore experience.
      </Typography>
      <Typography variant="body1" >
        Explore the sections below:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">
          <MuiLink href="/info/faqs" color="primary">
            FAQs
          </MuiLink>
        </Typography>
        <Typography >
          Get quick answers to frequently asked questions.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          <MuiLink href="/info/support" color="primary">
            Support
          </MuiLink>
        </Typography>
        <Typography >
          Find resources to help you troubleshoot any issues or get in touch with our team.
        </Typography>
      </Box>
      <Typography>
        If you don’t find what you’re looking for, feel free to reach out to us directly. We’re here to help you make the most of your time with BookStore!
      </Typography>
    </Container>
  );
}
