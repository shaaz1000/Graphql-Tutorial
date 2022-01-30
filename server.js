import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users, quotes } from "./fakedb.js";
// creating a schema
// schema could be blue print where we mention types
// from client side we can query

// query
const typeDefs = gql`
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
`;

// resolvers
const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
    user: (_, { id }) => users.find((user) => user.id === id),
    iquote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by === ur.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("server ready at", url);
});
