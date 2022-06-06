const { ApolloServer } = require('apollo-server');

const { config } = require('./config');
const { resolvers, typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen({ port: 5020 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
