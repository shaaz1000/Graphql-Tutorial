// model to be imported here
import "./models/Users.js";
import "./models/Quotes.js";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./schemaGQL.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { resolvers } from "./resolvers.js";
import { context } from "./context.js";
dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASEURL;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("server ready at", url);
});
