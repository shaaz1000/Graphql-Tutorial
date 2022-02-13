import { users, quotes } from "./fakedb.js";
import { signupUser, signinUser } from "./Mutations/signInUpUser.js";
import { createQuote } from "./Mutations/createQuote.js";
export const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
    user: (_, { id }) => users.find((user) => user.id === id),
    iquote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by === ur.id),
  },
  Mutation: {
    signupUser,
    signinUser,
    createQuote,
  },
};
