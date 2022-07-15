const path = require('path');

const { ApolloServer } = require('apollo-server');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const { config } = require('./config');
const { resolvers } = require('./resolvers');

const typeDefs = loadSchemaSync(path.join(__dirname, './schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
});

server.listen({ port: config.port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
