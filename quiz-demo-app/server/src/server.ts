import path from 'path';

import { ApolloServer } from 'apollo-server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { config } from './config';
import { resolvers } from './resolvers';

const typeDefs = loadSchemaSync(path.join(__dirname, './schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
});

server
  .listen({
    port: config.port,
  })
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
