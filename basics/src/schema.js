const { gql } = require('apollo-server');
const { UserApi, CompanyApi, HeroApi } = require('./api');

const typeDefs = gql`
  # Root queries

  type Query {
    user(id: ID!): UserProfile
    users: [UserListItem!]
    company(id: ID!): Company
    hero(id: ID!): Character
  }

  # Root mutations

  type Mutation {
    addUser(record: UserInput!): RecordID
    editUser(record: UserModifiedInput!): RecordID
    deleteUser(id: ID!): RecordID
  }

  # New record

  type RecordID {
    id: ID!
  }

  # Hero

  interface Character {
    id: ID!
    name: String!
  }

  type Human implements Character {
    id: ID!
    name: String!
    height: Float!
  }

  type Droid implements Character {
    id: ID!
    name: String!
    primaryFunction: String!
  }

  # Company

  type Company {
    id: ID!
    name: String!
    description: String
    users: [UserProfile!]
  }

  # User

  interface User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    age: Int!
    role: UserRole!
  }

  enum UserRole {
    admin
    user
    customer
  }

  type UserProfile implements User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    age: Int!
    role: UserRole!
    company: Company
  }

  type UserListItem implements User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    age: Int!
    role: UserRole!
  }

  input UserInput {
    companyId: ID
    firstName: String!
    lastName: String!
    age: Int!
    role: UserRole!
  }

  input UserModifiedInput {
    id: ID!
    companyId: ID
    firstName: String
    lastName: String
    age: Int
    role: UserRole
  }
`;

// Common resolvers

const userFullNameResolver = (parent) => {
  const { firstName, lastName } = parent;

  return [firstName, lastName].join(' ');
};

// Resolvers

const resolvers = {
  Query: {
    async user(_, args) {
      const { id } = args;

      return UserApi.fetchById(id);
    },

    async users() {
      return UserApi.fetchAll();
    },

    async company(_, args) {
      const { id } = args;

      return CompanyApi.fetchById(id);
    },

    async hero(_, args) {
      const { id } = args;

      return HeroApi.fetchById(id);
    },
  },
  Mutation: {
    async addUser(_, args) {
      const { record } = args;

      return UserApi.save(record);
    },
    async editUser(_, args) {
      const { record } = args;

      return UserApi.save(record);
    },
    async deleteUser(_, args) {
      const { id } = args;

      return UserApi.delete(id);
    },
  },

  UserListItem: {
    fullName: userFullNameResolver,
  },

  UserProfile: {
    fullName: userFullNameResolver,
    company: async (parent) => {
      const { companyId } = parent;

      return CompanyApi.fetchById(companyId);
    },
  },

  Company: {
    users: async (parent) => {
      const { id } = parent;

      return CompanyApi.fetchUsers(id);
    },
  },

  Character: {
    __resolveType: (parent) => {
      if (parent.height) {
        return 'Human';
      }

      if (parent.primaryFunction) {
        return 'Droid';
      }

      return null;
    },
  },
};

module.exports = { typeDefs, resolvers };
