import { Button } from "@mui/material";
import { useAuth } from "@/store/AuthContext";

export default function Logout() {
    const { logout } = useAuth();

    function handleLogout() {
        logout();
    }

    return (
        <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{
                textTransform: "none", // Prevents uppercase transformation
                backgroundColor: "#d32f2f", // Primary red color
                "&:hover": {
                    backgroundColor: "#b71c1c", // Darker red on hover
                },
                fontWeight: "bold",
                fontSize: "0.875rem", // Adjust font size
                padding: "0.5rem 1rem", // Add padding
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
        >
            Logout
        </Button>
    );
}
