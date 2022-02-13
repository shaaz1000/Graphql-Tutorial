import mongoose from "mongoose";
import { signupUser, signinUser } from "./Mutations/signInUpUser.js";
import { createQuote } from "./Mutations/createQuote.js";

const User = mongoose.model("User");
const Quotes = mongoose.model("Quotes");
export const resolvers = {
  Query: {
    users: async () => await User.find({}), // find all user
    quotes: async () => await Quotes.find({}), // find all quote
    user: async (_, { _id }) => await User.findOne({ _id }),
    iquote: async (_, { by }) => await Quotes.find({ by }),
  },
  User: {
    quotes: async (ur) => Quotes.find({ by: ur._id }),
  },
  Mutation: {
    signupUser,
    signinUser,
    createQuote,
  },
};
