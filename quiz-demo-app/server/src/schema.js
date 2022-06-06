const { gql } = require('apollo-server');

const { ModuleApi } = require('./api');

const typeDefs = gql`
  # Root

  type Query {
    modules(pagination: PaginationInput!): [ModuleListItem!]
    module(id: ID!): ModuleProfile!
  }

  type Mutation {
    saveModule(params: ModuleInput!): RecordID!
    deleteModule(id: ID!): RecordID
  }

  # Inputs

  input PaginationInput {
    page: Int!
    limit: Int
  }

  input ModuleInput {
    id: ID
    title: String!
    description: String!
    screenSize: Int!
    questions: [QuestionInput!]!
  }

  input QuestionInput {
    id: ID
    name: String!
    title: String!
    options: [OptionInput!]!
  }

  input OptionInput {
    id: ID
    name: String!
    title: String!
    correct: Boolean!
  }

  # Interfaces

  interface Module {
    id: ID!
    title: String!
    description: String!
    screenSize: Int
  }

  # Types

  type RecordID {
    id: ID!
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

  Mutation: {
    async saveModule(_, args) {
      const { params } = args;

      return ModuleApi.save(params);
    },
    async deleteModule(_, args) {
      const { id } = args;

      return ModuleApi.delete(id);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
