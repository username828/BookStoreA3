import BookList from "@/components/Books/BookList";
import GenreSearch from "@/components/GenreMain/GenreSearch";

export default function BooksPage(props){
    const arr=props.allBooks
    return(
        <>
        
        <GenreSearch/>
        <BookList list={arr}/>
        </>
    )
}
export async function getStaticProps() {
    const res=await fetch('http://localhost:3000/api/books');
    const books=await res.json()

    if(!books || books.length===0){
        return{
            notFound:true //404 if data unavailable
        }
    }
    return{
        props:{
            allBooks:books
        },
        revalidate:60 //after 60s update
    }
    
}