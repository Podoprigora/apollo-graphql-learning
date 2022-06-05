const { gql } = require('apollo-server');

const { ModuleApi } = require('./api');

const typeDefs = gql`
  type Query {
    modules(pagination: PaginationInput!): [ModuleListItem!]
    module(id: ID!): ModuleProfile!
  }

  input PaginationInput {
    page: Int!
    limit: Int
  }

  interface Module {
    id: ID!
    title: String!
    description: String!
    screenSize: Int
  }

  type ModuleListItem implements Module {
    id: ID!
    title: String!
    description: String!
    screenSize: Int
  }

  type ModuleProfile implements Module {
    id: ID!
    title: String!
    description: String!
    screenSize: Int
    questions: [Question!]!
  }

  type Question {
    id: ID!
    name: String!
    title: String!
    options: [Option!]!
  }

  type Option {
    id: ID!
    name: String!
    title: String!
  }
`;

const resolvers = {
  Query: {
    async modules(_, args) {
      const { pagination } = args;

      return ModuleApi.fetchAll(pagination);
    },

    async module(_, args) {
      const { id } = args;

      return ModuleApi.fetchById(id);
    },
  },

  ModuleProfile: {
    async questions(parent) {
      const { id } = parent;

      return ModuleApi.fetchQuestions(id);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
