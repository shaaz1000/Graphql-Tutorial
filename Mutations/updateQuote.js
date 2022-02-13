import mongoose from "mongoose";

const Quotes = mongoose.model("Quotes");
const User = mongoose.model("User");
export const updateQuote = async (_, { quoteDetail }, { userId }) => {
  // check if userId exist
  if (!userId) throw new Error("you must be logged in");

  // userId from token should match the key "by" in quotes

  const isUserOwnerOfQuote = await User.findOne({ _id: userId });

  if (!isUserOwnerOfQuote)
    throw new Error("you dont have permission to edit this post");

  const updateQuote = await Quotes.findOneAndUpdate(
    { _id: quoteDetail._id },
    {
      $set: {
        name: quoteDetail.name,
      },
    },
    { lean: true, new: true }
  );

  return updateQuote;
};
