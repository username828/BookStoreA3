import GenreMain from "@/components/GenreMain/GenreMain";
export default function Genre(props){
    
    return(
        <>
        {
            props.genres.map((g)=>{
                return <GenreMain id={g.id} name={g.name}/>
            })
        }
        </>
    )
}
export async function getServerSideProps(){

    const res=await fetch('http://localhost:3000/api/genres');
    const genres=await res.json();

    return {
        props: {genres},
    }
}