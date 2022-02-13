import mongoose from "mongoose";

const Quote = mongoose.model("Quotes");

export const createQuote = async (_, { name }, { userId }) => {
  // userId is coming from context which is in the resolver, we have destructure it
  if (!userId) throw new Error("User must be logged in");

  const quote = new Quote({
    name,
    by: userId,
  });
  const savedQuote = await quote.save();
  return savedQuote;
};
