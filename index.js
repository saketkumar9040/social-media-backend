import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import {connectDB} from "./configs/dbConfig.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";

dotenv.config();
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port: process.env.PORT}).then((res)=>{
    console.log(`server running on ${res.url}`)
});