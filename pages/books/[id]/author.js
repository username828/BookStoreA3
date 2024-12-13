import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useAuth } from "@/store/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthorsPage(props) {
    const { user, token,logout } = useAuth();
    const r = useRouter();

    useEffect(() => {
        console.log("User status:", user);  // Add this for debugging

        if (!user) {
            r.push('/login');
        }
    }, [user]);

    if (!user) {
        return <p>Redirecting to login...</p>;
    }

    if (!r.query.id) {
        return <p>Loading...</p>;
    }

    if (!props.authorInfo) {
        return <p>No author info available</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            {/* Author Info Card */}
            <Card style={{ marginBottom: "20px" }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {props.authorInfo.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {props.authorInfo.biography}
                    </Typography>
                </CardContent>
            </Card>

            {/* List of Books in Table */}
            <Typography variant="h5" textAlign={"center"} gutterBottom>
                Books of {props.authorInfo.name}
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
                        {props.authorInfo.books.map((book) => (
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


export async function getStaticProps(context) {
    const id=context.params.id

    const res=await fetch(`http://localhost:3000/api/books/${id}`)
    const data=await res.json();
    
    const authorId=data.authorId
    console.log("Author Id:",authorId)

    const getAuthor=await fetch(`http://localhost:3000/api/authors/${authorId}`)
    const authorInfo=await getAuthor.json()
    console.log("Author Info",authorInfo)
    return {
        props:{authorInfo}
    }
    
}

export async function getStaticPaths(){
    const res=await fetch(`http://localhost:3000/api/books`)
    const data=await res.json()

    const allIds=data.map(i=>i.id);

    const allPaths = allIds.map(i => ({
        params: { id: i }
    }));

    return {
        paths:allPaths.map(id=>({
            params:{id:id.params.id}
        })),
        fallback:true
    }
}