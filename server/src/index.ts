import express from "express";
import { ApolloServer } from "apollo-server-express";
import { __Schema } from "graphql";

(async () => {
  const server = new ApolloServer(null);

  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: ["http://localhost:3000"],
      credentials: true,
    },
  });
  await app.listen({ port: 8000 });
  console.log("server start");
})();
