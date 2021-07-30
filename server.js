const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app, path: "/taskGQL" });
  
  app.use((req, res) => {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.send("hello express apollo server");
  });

  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.ksfyq.mongodb.net/TODOLIST?retryWrites=true",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );
  app.listen(process.env.PORT || 4000, () =>
    console.log("hello server",process.env.PORT)
  );

}
startServer();
