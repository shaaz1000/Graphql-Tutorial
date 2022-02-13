import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({
  path: "./config.env",
});
const User = mongoose.model("User");

export const signupUser = async (_, { userNew }) => {
  // search if a user with email already exists
  const isEmailAlreadyExist = await User.findOne(
    { email: userNew.email },
    {}, // particular thing to be find we can add here
    { lean: true }
  );

  if (isEmailAlreadyExist)
    throw new Error("User with that email already exist");

  // if no email found new user , create user

  // hash password firs
  const hashedPassword = await bcrypt.hash(userNew.password, 12);
  const newUser = new User({
    ...userNew,
    password: hashedPassword,
  });
  return await newUser.save();
};

export const signinUser = async (_, { userSignin }) => {
  // search if a user with email exists
  const user = await User.findOne(
    { email: userSignin.email },
    {}, // particular thing to be find we can add here
    { lean: true }
  );

  if (!user) throw new Error("User with that email does not exist");

  // compare password
  const isPasswordCorrect = await bcrypt.compare(
    userSignin.password,
    user.password
  );

  if (!isPasswordCorrect) throw new Error("Email or password is incorrect");

  const token = await jwt.sign(
    {
      userId: user._id,
    },
    process.env.tokenKey
  );

  return { token };
};
