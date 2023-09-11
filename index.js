import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import {connectDB} from "./configs/dbConfig.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { mainResolver } from "./graphql/resolvers/mainResolver.js";

dotenv.config();
connectDB();

const server = new ApolloServer({
    typeDefs,
    mainResolver
});

server.listen({port: process.env.PORT}).then((res)=>{
    console.log(`server running on ${res.url}`)
});