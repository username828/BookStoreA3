import { useState, useEffect } from "react";
import { useAuth } from "@/store/AuthContext";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/router";

export default function SearchHistory() {
    const { user, token } = useAuth();
    const router=useRouter()
    const [history, setHistory] = useState([]);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            fetchHistory();
        }
    }, [user]);

    const fetchHistory = async () => {
        try {
            const res = await fetch("/api/user/history", {
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": user[0],
                },
            });

            if (!res.ok) throw new Error("Failed to fetch history");

            const data = await res.json();
            setHistory(data.history);
        } catch (error) {
            setError(error.message);
        }
    };

    const addQuery = async () => {
        if (!query.trim()) return;

        try {
            const res = await fetch("/api/user/history", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": user[0],
                },
                body: JSON.stringify({ query }),
            });

            const data=await res.json();
            if(data.book){
                router.push(`/books/${data.book.id}`)
            }

            else if(data.author){
                router.push(`/authors/${data.author.id}`)
            }

            else if (data.genre){
                router.push(`/genre/${data.genre.id}`)
            }

            else{
                router.push('/404')
            }
            console.log(data)
            if (!res.ok) throw new Error("Failed to add query");


            setQuery(""); 
            fetchHistory();
        } catch (error) {
            setError(error.message);
        }
    };

    if (!user) return <Typography variant="body1" textAlign={"center"}>Please log in to view your search history.</Typography>;

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>Your Search History</Typography>
            {error && <Typography color="error" variant="body1">{error}</Typography>}
            
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, marginBottom: 3 }}>
                <TextField
                    label="Enter a search query"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                    sx={{ flex: 1 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addQuery}
                    sx={{ height: "100%" }}
                >
                    Search
                </Button>
            </Box>

            <List>
                {history.map((item) => (
                    <ListItem key={item._id}>
                        <ListItemText
                            primary={item.query}
                            secondary={`Searched on: ${new Date(item.timestamp).toLocaleString()}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
