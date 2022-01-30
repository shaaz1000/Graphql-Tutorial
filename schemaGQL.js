import { gql } from "apollo-server";

// creating a schema
// schema could be blue print where we mention types
// from client side we can query

// query
export const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quotes: [Quote]
    iquote(by: ID!): [Quote]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    quotes: [Quote]
  }

  type Quote {
    name: String
    by: ID
  }

  type Mutation {
    signupUserDummy(userNew: UserInput!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;
