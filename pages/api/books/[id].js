import { MongoClient } from "mongodb";

export default async function handler(req,res){
    const {id}=req.query

    const client=await MongoClient.connect(process.env.MONGODB_URI);
    const db=client.db();
    const book=await db.collection('books').findOne({id})
    console.log(book)

    const genre=await db.collection('genres').findOne({id:book.genreId})
    const genreName=genre.name
    const author=await db.collection('authors').findOne({id:book.authorId})
    const authorName=author.name
    client.close()

    const bookDetails={
        ...book,
        genreName:genreName,
        authorName:authorName
    }


    return res.status(200).json(bookDetails)

}