import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Redirect to homepage
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
        textAlign: "center",
        padding: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          color: "#333",
          fontSize: { xs: "3rem", sm: "4rem" },
        }}
      >
        404 - Page Not Found
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "1rem",
          color: "#555",
          fontSize: { xs: "1rem", sm: "1.25rem" },
        }}
      >
        The page you're looking for does not exist.
      </Typography>
      <Button
        onClick={handleGoHome}
        variant="contained"
        color="primary"
        sx={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          fontWeight: "bold",
          borderRadius: "8px",
          textTransform: "none",
          '&:hover': {
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}
