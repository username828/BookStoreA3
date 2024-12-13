import { Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function GenreSearch() {
  const [selectedGenre, setSelectedGenre] = useState(""); // Track selected genre
  const r = useRouter();

  function submit(event) {
    event.preventDefault();
    if (selectedGenre) {
      r.push(`/genre/${selectedGenre}`);
    }
  }

  return (
    <form
      onSubmit={submit}
      style={{
        margin: "2rem auto",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "6px",
        maxWidth: "600px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Genre</InputLabel>
        <Select
          value={selectedGenre} // Bind the Select value to state
          onChange={(e) => setSelectedGenre(e.target.value)} // Update state on change
          label="Genre"
        >
          <MenuItem value="1">Fiction</MenuItem>
          <MenuItem value="2">Dystopian</MenuItem>
          <MenuItem value="3">Romance</MenuItem>
          <MenuItem value="4">Adventure</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{
          marginTop: "1rem",
          padding: "0.75rem",
          fontWeight: "bold",
        }}
      >
        Select Genre
      </Button>
    </form>
  );
}
