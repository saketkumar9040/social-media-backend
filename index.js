import { gql,ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import {connectDB} from "./configs/dbConfig.js"

dotenv.config();
connectDB();

import  {Post} from "./modals/postModal.js"

const typeDefs = gql`

   type post {
    id:ID!
    body:String!
    createdAt:String!
    postedBy:String!

   }
   type Query{
      getPosts:[post]
   }
`

const resolvers = {
    Query : {
       async getPosts(){
            try {
               const posts = await Post.find();
               return posts
            } catch (error) {
                console.log(error)
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});



server.listen({port: 3000}).then((res)=>{
    console.log(`server running on ${res.url}`)
});