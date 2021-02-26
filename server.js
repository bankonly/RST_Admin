const app = require("express")();
const morgan = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const { InitSocket } = require("./_configs/socket");
const { InitialApp, OnEndInitialApp } = require("./_configs/app");
const { LOG } = require("./utils/common-func");
const { InitialDatabase } = require("./_configs/database");
const InitialRoute = require("./routes/setup");
const typeDefs = require("./graphql/query");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
// Database
InitialDatabase();

// Config all middleware
InitialApp(app);

// initial all routes
InitialRoute(app);

//On end middleware
OnEndInitialApp(app);

const listener = app.listen(process.env.APP_PORT);
//config socket Io
InitSocket(listener);

LOG("🚀 Server ready at http://localhost:" + process.env.APP_PORT);
