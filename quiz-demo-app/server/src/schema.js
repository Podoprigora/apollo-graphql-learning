const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    test: Test
  }

  type Test {
    id: ID
  }
`;

const resolvers = {
  Query: {
    test() {
      return null;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
