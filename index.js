import { gql,ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import {connectDB} from "./configs/dbConfig.js"

dotenv.config();
connectDB()



const typeDefs = gql`
   type Query{
      sayHi:String!
   }
`

const resolvers = {
    Query : {
        sayHi: () => "Hello World!"
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});



server.listen({port: 3000}).then((res)=>{
    console.log(`server running on ${res.url}`)
});