import { gql } from "apollo-server";

// creating a schema
// schema could be blue print where we mention types
// from client s_ide we can query

// query
export const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    iquote(by: ID!): [Quote]
  }

  type QuoteWithName {
    name: String
    by: IdName
  }

  type IdName {
    _id: String
    firstName: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  type Quote {
    name: String!
    by: ID!
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignin: UserSigninInput!): Token
    createQuote(name: String!): Quote
    updateQuote(quoteDetail: quoteDetailsInput!): Quote
  }

  input quoteDetailsInput {
    name: String!
    _id: String!
  }

  input UserSigninInput {
    email: String!
    password: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;
