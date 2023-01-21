const express = require('express');
const {ApolloServer} = require('apollo-server-express') //Bringing in Apollo Server
const path = require('path');
const {typeDefs, resolvers} = require ('./schemas') //Calling on typeDefs and Resolvers

const db = require('./config/connection');
const { Server } = require('http');

// const routes = require('./routes');(old)

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// This is where we will create an instance of Apollo server and GraphQL
const startApolloServer = async (typeDefs, resolvers) => {
  await Server.start();
  Server.applyMiddleware({app});

  



app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {console.log(`🌍 Now listening on localhost:${PORT}`);
  })
});
};

startApolloServer(typeDefs, resolvers)
