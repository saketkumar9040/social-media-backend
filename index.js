import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import {connectDB} from "./configs/dbConfig.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { mainResolvers } from "./graphql/resolvers/mainResolvers.js";

dotenv.config();
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers:mainResolvers
});

server.listen({port: process.env.PORT}).then((res)=>{
    console.log(`server running on ${res.url}`)
});