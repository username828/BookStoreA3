import { Box, Typography } from "@mui/material";
import Button from "../ui/Button";
import { useRouter } from "next/router";

export default function Authors(props) {
    const router=useRouter()
    function handleClick(id){
        router.push(`/authors/${id}`)
    }
    return (
        <Box
            sx={{
                border: "1px solid #ccc", // Light gray border
                borderRadius: "8px", // Rounded corners
                padding: "16px", // Spacing inside the container
                maxWidth: "80%", // Maximum width
                margin: "50px auto", // Centering the container
                backgroundColor: "#f9f9f9", // Light background color
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                transition: "box-shadow 0.3s ease, transform 0.3s ease", // Smooth transition for hover effect
                "&:hover": {
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", // Larger shadow on hover
                    transform: "translateY(-5px)", // Slight lift on hover
                    cursor: "pointer", // Change cursor to pointer on hover
                },
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    padding: "10px", // Padding for the title
                    fontWeight: "bold",
                }}
            >
                Author Name: {props.name}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    padding: "10px", // Padding for the biography
                }}
            >
                Author Biography: {props.biography}
            </Typography>

            <Button onClick={()=>handleClick(props.id)}>View Author Details</Button>
        </Box>
    );
}
