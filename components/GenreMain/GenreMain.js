import { Box, Typography, Card } from "@mui/material";
import Link from "next/link";

export default function GenreMain(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2, // Responsive gap between cards
        padding: 3,
      }}
    >
      <Link href={`/genre/${props.id}`} passHref>
        <Card
          sx={{
            width: {md:"300px", sm:"300px", xs:"150px"}, 
            height: "200px", 
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              backgroundColor: "#3498db", 
              transform: "scale(1.05)", 
              color: "white", 
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Shadow effect
            },
            "&:active": {
              backgroundColor: "#2980b9", 
            },
            "&:focus": {
              outline: "none", 
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "#333",
              transition: "color 0.3s",
              "&:hover": {
                color: "white", // Text color change on hover
              },
            }}
          >
            {props.name}
          </Typography>
        </Card>
      </Link>
    </Box>
  );
}
