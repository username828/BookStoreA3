import useSWR from "swr";
import Authors from "@/components/Authors/Authors";
export default function AuthorsPage(){
    const fetcher=(url)=>fetch(url).then((res)=>res.json())
    const {data,error}=useSWR(`/api/authors`,fetcher)
    if (error){
        return <div>Failed to load authors</div>
    }
    if (!data){
        return <div>Loading...</div>;
    }

    return(
        <>
        <ul>
            {data.map((auth)=>{
                return <Authors id={auth.id} name={auth.name} biography={auth.biography}/>

            }
            )}
        </ul>
        </>
    )
}