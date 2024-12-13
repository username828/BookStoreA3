import BookList from "@/components/Books/BookList"
export default function GenrePage(props){
    return (
        <>
            <BookList list={props.books}/>
        </>
    )

}

export async function getServerSideProps(context){
    const genreId=context.params.gid

    const res=await fetch(`http://localhost:3000/api/genres/${genreId}/books`)
    const books=await res.json()
    return{
        props:{books}
    }
    
}