// The type defs file is where the Query and Mutation types will be defined
//Mutations: login(x), addUser(x)
// Save book needs author's array, description, title, bookId, image and link
// We need a User, Book and Auth

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    _id: ID!





  } 
  
type mutation {
login (email: String!, password: String!): Auth
addUser (username: String!, email:String!, password: String!): Auth

saveBook (input: {
  authors: [String]!
  description: String
  title: String
  bookId: String
  image: String
  link: String

}): User

removeBook(
BookId:

): User

}

type User {
  _id: ID
  username: String
  email: String
  bookCount:
  savedBooks: [bookSchema]

}

type Book {
  bookId:
  authors: [String]!
  description: String
  title: String
  image: String
  link: String


}

type Auth {
token:
user: 

}


`








module.exports = typeDefs;
