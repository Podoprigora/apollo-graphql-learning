const { gql } = require('apollo-server');

const { ModuleApi, UserApi } = require('./api');

const typeDefs = gql`
  # Root

  type Query {
    modules(pagination: PaginationInput): [ModuleListItem!]
    module(id: ID!): ModuleProfile!
    userInfo: UserInfo!
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

  type UserInfo {
    id: ID!
    firsName: String!
    lastName: String!
    fullName: String!
    email: String!
    pictureUrl: String
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
    async userInfo() {
      return UserApi.getRandomOne();
    },
  },

  ModuleProfile: {
    async questions(parent) {
      const { id } = parent;

      return ModuleApi.fetchQuestions(id);
    },
  },

  UserInfo: {
    fullName(parent) {
      const { firstName, lastName } = parent || {};

      return [firstName, lastName].join(' ');
    },
  },

  Mutation: {
    async saveModule(_, args) {
      const { params } = args;
      return await ModuleApi.save({ ...params });
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
