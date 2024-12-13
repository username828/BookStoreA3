import { useRouter } from "next/router";
import BookList from "@/components/Books/BookList";
import { useAuth } from "@/store/AuthContext";
import { Typography, Box, Button } from "@mui/material";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home(props) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/genre');
  };
  const { user } = useAuth();
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
          padding: { xs: "1rem", sm: "2rem" },
          textAlign: "center",
        }}
      >
        {user && (
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            Welcome: {user[1]}
          </Typography>
        )}

        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          sx={{
            padding: { xs: "0.75rem 1.5rem", sm: "1rem 2rem" },
            fontWeight: "bold",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            '&:hover': {
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
            },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          View Genres
        </Button>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            marginTop: "3rem",
            marginBottom: "2rem",
            fontWeight: "bold",
            color: "#333",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          Featured Books
        </Typography>


          <BookList list={props.featuredBooks} />
        
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const res=await fetch('http://localhost:3000/api/books')
  const data=await res.json()
  const featuredBooks = data.filter(book=>book.rating>4.5)
  return {
    props: { featuredBooks },
  };
}
