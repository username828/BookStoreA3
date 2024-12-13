import { useRouter } from "next/router";
import { Container, Typography, Box, Link as MuiLink } from "@mui/material";

export default function Info() {
  const r = useRouter();
  const slug = r.query.slug;

  if (!slug) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (slug[0] === "faqs") {
    return (
      <Container maxWidth="md" sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box>
          <Typography variant="h6">Q1: How do I purchase a book?</Typography>
          <Typography >
            A: To purchase a book, browse through our collection in the Books section, select the book you want, and click on "View Details." From there, you’ll find a link to make your purchase.
          </Typography>
          <Typography variant="h6">Q2: Can I read a book preview?</Typography>
          <Typography >
            A: Yes! Click on any book title to view details, including a short preview if available.
          </Typography>
          <Typography variant="h6">Q3: How can I contact customer support?</Typography>
          <Typography >
            A: Visit our Support page for contact information and support resources.
          </Typography>
          <Typography variant="body1">
            Have more questions? Reach out to us via the Support page or check back for updates as we add new FAQs!
          </Typography>
        </Box>
      </Container>
    );
  }

  if (slug[0] === "support") {
    return (
      <Container maxWidth="md" sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Support Information
        </Typography>
        <Typography paragraph>
          Welcome to the BookStore Support Center! Whether you need help with your account, navigating the site, or purchasing books, we’re here for you.
        </Typography>
        <Typography variant="h6">Support Resources:</Typography>
        <Typography variant="body1">
          <strong>Account Issues:</strong> Forgot your password? Trouble logging in? Contact us at{" "}
          <MuiLink href="mailto:support@bookstore.com">support@bookstore.com</MuiLink> for assistance.
        </Typography>
        <Typography variant="body1">
          <strong>Purchases and Orders:</strong> If you have questions about your order, email{" "}
          <MuiLink href="mailto:orders@bookstore.com">orders@bookstore.com</MuiLink>, and our team will assist you.
        </Typography>
        <Typography variant="body1">
          <strong>Technical Issues:</strong> For technical help, check our FAQs or contact{" "}
          <MuiLink href="mailto:tech@bookstore.com">tech@bookstore.com</MuiLink>.
        </Typography>
        <Typography paragraph>
          Our team strives to respond within 24 hours. For urgent issues, please mention "URGENT" in your email subject line. Thank you for choosing BookStore!
        </Typography>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="md" sx={{ padding: 2 }}>
        <Typography variant="h6">Page not found</Typography>
      </Container>
    );
  }
}
