import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "./config.env",
});
export const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, process.env.tokenKey);
    return { userId };
  }
};
