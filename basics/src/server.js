const { ApolloServer } = require('apollo-server');

const { resolvers, typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen({ port: 5011 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
