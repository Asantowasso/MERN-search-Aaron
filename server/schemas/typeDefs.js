// The type defs file is where the Query and Mutation types will be defined

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    name: String!

  }


`








module.exports = typeDefs;
