import mongoose from "mongoose";

export const  connectDB = async () => {
    try{
       const connect = await mongoose.connect(`${process.env.MONGO_URI}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       });
    //    console.log(connect)
       console.log(`Mongo DB connected : ${connect.connection.host}`)
    }catch(error){
        console.log(error)
    }
}