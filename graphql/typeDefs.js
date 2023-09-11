import { gql } from "apollo-server"

export const typeDefs = gql`

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
