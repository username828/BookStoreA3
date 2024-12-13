import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/store/AuthContext";
import BookDetails from "@/components/Books/BookDetails";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function BookDetailsPage(props) {
  const { user,token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("User status:", user);  // Add this for debugging

    if (!user) {
      router.push('/login');
    }
  }, [user]);

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  if (!props.loadedBook) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BookDetails book={props.loadedBook} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centers the button horizontally
          marginTop: "2rem", // Adds space above the button
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "1rem 2rem",
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            '&:hover': {
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Link href={`/books/${props.loadedBook.id}/author`} passHref>
            View Author Info
          </Link>
        </Button>
      </Box>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/books/${context.params.id}`);
  const specificBook = await res.json();

  if (!specificBook) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedBook: specificBook,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/books');
  const data = await res.json();
  const allPaths = data.map((book) => ({
    params: { id: book.id },
  }));

  return {
    paths: allPaths,
    fallback: true,
  };
}
