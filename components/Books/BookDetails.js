import { Box, Typography, Paper } from "@mui/material";

export default function BookDetails(props) {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: 4,
        maxWidth: { xs: "90%", sm: "600px", md: "800px" },
        margin: "50px auto",
        backgroundColor: "#f9f9f9",
        borderRadius: 3,
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#0070f3",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 2,
        }}
      >
        {props.book.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#555",
          fontSize: "1.2rem",
          marginBottom: 2,
          lineHeight: 1.6,
        }}
      >
        {props.book.description}
      </Typography>

      {[
        { label: "Author", value: props.book.authorName },
        { label: "Genre", value: props.book.genreName },
        { label: "Price", value: `$${props.book.price}` },
        { label: "Rating", value: `${props.book.rating} / 5` },
      ].map((item) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="body2" sx={{ color: "#666" }}>
            {item.label}:
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "#0070f3" }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}
