import { gql } from "apollo-server";

export const typeDefs = gql`

   type User {
      id:ID!
      username:String!
      email:String!
      createdAt:String!
      token:String!
   }
   type Post {
    id:ID!
    body:String!
    createdAt:String!
    postedBy:String!

   }
   input RegisterInput {
      username:String!
      email:String!
      password:String! 
   }
   type Query{
      getPosts:[Post]
   }
   type Mutation {
      register(registerInput : RegisterInput):User!
   }
`;
