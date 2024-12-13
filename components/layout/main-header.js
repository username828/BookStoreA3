import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Theme from "../ui/Theme";
import { useAuth } from "@/store/AuthContext";
import Logout from "../Logout/LogoutButton";
import NextLink from "next/link";

export default function Header() {
    const { user } = useAuth();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    const navItems = [
        { text: "Information", href: "/info" },
        { text: "Books", href: "/books" },
        { text: "Authors", href: "/authors" },
        { text: "Search", href: "/search" },
    ];

    return (
        <>
            {/* AppBar */}
            <AppBar position="static" sx={{ backgroundColor: "#202020", padding: "0 10%" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "5rem",
                    }}
                >
                    {/* Logo */}
                    <Typography
                        variant="h4"
                        component={NextLink}
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "#3498db",
                            fontFamily: "'Fira', sans-serif",
                            fontWeight: "bold",
                            "&:hover": {
                                color: "#2980b9",
                            },
                        }}
                    >
                        BookStore
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 2,
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.text}
                                component={NextLink}
                                href={item.href}
                                sx={{
                                    color: "#3498db",
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    "&:hover": {
                                        color: "#2980b9",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>

                    {/* Theme and Logout */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Theme />
                        {user ? (
                            <Logout />
                        ) : (
                            <Button
                                component={NextLink}
                                href="/login"
                                variant="outlined"
                                sx={{
                                    textTransform: "none", 
                                    backgroundColor: "red",
                                    color:"white",
                                    "&:hover": {
                                        backgroundColor: "#b71c1c", 
                                    },
                                    fontWeight: "bold",
                                    fontSize: "0.875rem", 
                                    padding: "0.7rem 1rem", 
                                    borderRadius: "8px", 
                                    borderColor:"red"
                                    
                                }}
                            >
                                Login
                            </Button>
                        )}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" }, color: "#3498db" }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: "#202020",
                        color: "#fff",
                    },
                }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                component={NextLink}
                                href={item.href}
                                onClick={handleDrawerToggle}
                                sx={{
                                    "&:hover": {
                                        color: "#fff", // White text on hover
                                    },
                                }}
                            >
                                <ListItemText primary={item.text} sx={{ color: "#3498db" }} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Theme />
                        </ListItemButton>
                    </ListItem>
                    {user ? (
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Logout />
                            </ListItemButton>
                        </ListItem>
                    ) : (
                        <ListItem disablePadding>
                            <ListItemButton component={NextLink} href="/login">
                                <ListItemText primary="Login" sx={{ color: "#3498db" }} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </>
    );
}
