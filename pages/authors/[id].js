import useSWR from "swr";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";

export default function AuthorDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(id ? `/api/authors/${id}` : null, fetcher);

  if (error) {
    return <div>Failed to load author details.</div>;
  }

  if (!data) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
    {/* Author Info Card */}
    <Card style={{ marginBottom: "20px" }}>
        <CardContent>
            <Typography variant="h4" gutterBottom>
                {data.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {data.biography}
            </Typography>
        </CardContent>
    </Card>

    {/* List of Books in Table */}
    <Typography variant="h5" textAlign={"center"} gutterBottom>
        Books of {data.name}
    </Typography>
    <TableContainer component={Paper} style={{ maxWidth: "800px", margin: "auto" }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><strong>Title</strong></TableCell>
                    <TableCell><strong>Price</strong></TableCell>
                    <TableCell><strong>Rating</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.books.map((book) => (
                    <TableRow key={book._id}>
                        <TableCell>{book.title}</TableCell>
                        <TableCell>{book.price}</TableCell>
                        <TableCell>{book.rating}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</div>
);
}
