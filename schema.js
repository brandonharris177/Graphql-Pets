const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
//? not sure why String is capitalized
//can add custom scolars
const typeDefs = gql`
  type User {
      id: ID!
      username: String!
  }
  type Pet {
      id: ID!
      createdAt: String!
      name: String!
      type: String!
  }

  type Query{
      userList: User
      petsList: [Pet]!
  }

`;

module.exports = typeDefs
