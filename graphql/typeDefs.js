import { gql } from "apollo-server"

export const typeDefs = gql`

   type User {
      id:ID!
      username:String!
      email:String!
      password:String!
      createdAt:String!
   }

   type Post {
    id:ID!
    body:String!
    createdAt:String!
    postedBy:String!

   }
   type Query{
      getPosts:[Post]
      getUsers:[User]
   }
`
