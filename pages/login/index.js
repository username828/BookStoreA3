import { useAuth } from "@/store/AuthContext";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { TextField, Button, Typography, Box, Paper, Alert } from "@mui/material"; // Import Alert component

export default function Login() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;

    const stat = await login(userName, email); // Make sure to await the login function

    if (stat === true) {
      router.push("/"); // Redirect to the home page on successful login
    } else {
      setError(stat); // Set the error message if login fails
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: "2rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            inputRef={userNameRef}
            sx={{ marginBottom: "1.5rem" }}
          />
          {/* Email Field */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            inputRef={emailRef}
            sx={{ marginBottom: "1.5rem" }}
          />
          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              padding: "0.75rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </form>

        {/* Display error message if there's an error */}
        {error && (
          <Alert severity="error" sx={{ marginTop: "1.5rem" }}>
            {error}
          </Alert>
        )}
      </Paper>
    </Box>
  );
}
