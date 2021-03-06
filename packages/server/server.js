const { ApolloServer } = require("apollo-server");
const typeDefs = require("./type-defs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ 
  cors: true, 
  typeDefs, 
  resolvers,
  context: ({ req }) => ({
    token: req.headers.authorization
  }) 
});

// The `listen` method launches a web server.
server.listen({ port: 8081 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
