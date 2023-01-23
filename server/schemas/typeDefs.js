// The type defs file is where the Query and Mutation types will be defined
//Mutations: login(x), addUser(x)
// Save book needs author's array, description, title, bookId, image and link
// We need a User, Book and Auth

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
 }




 
  
type Mutation {
loginUser (email: String!, password: String!): Auth
addUser (username: String!, email:String!, password: String!): Auth 
 saveBook (bookinfo: bookInput!): User
 removeBook (bookId: ID!): User

}

input bookInput {
  authors: [String]!
  description: String
  title: String
  bookId: String
  image: String
  link: String
}



type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  _id: ID
  authors: [String]!
  description: String
  title: String
  image: String
  link: String
}

type Auth {
token: ID!
user: User
}


`;

module.exports = typeDefs;
