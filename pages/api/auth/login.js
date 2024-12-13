import { MongoClient } from "mongodb"
export default async function handler(req,res) {
    if(req.method==="POST"){
        const {username,email}=req.body
        
        if (!username || !email) {
            return res.status(400).json({ message: "Username and email are required" });
        }

        const client=await MongoClient.connect(process.env.MONGODB_URI);
        const db=client.db();


        const data=await db.collection('users').findOne({username:username,email:email});
        if(!data){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const user=[data.id,data.email]
        const token=1
        console.log(data.id)

        client.close()

        return res.status(200).json({user,token})
    }
    
}