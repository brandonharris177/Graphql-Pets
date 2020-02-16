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
  input PetInput{
      id:ID
      name:String
      type:String
  }

  type Query{
      userList: User
      petsList: [Pet]!
      onePet(input: PetInput ):Pet
  }

  input CreatePet{
      name:String!
      type:String!
  }

  type Mutation{
      createPet(input: CreatePet!):Pet!

  }
`;

module.exports = typeDefs
