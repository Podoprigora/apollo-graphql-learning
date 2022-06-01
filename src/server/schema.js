const { gql } = require('apollo-server');
const { UserApi, CompanyApi, HeroApi } = require('./api');

const typeDefs = gql`
  # Root query

  type Query {
    user(id: ID!): UserProfile
    users: [UserListItem!]
    company(id: ID!): Company
    hero(id: ID!): Character
  }

  # Hero queries

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

  # User queries

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

  type Company {
    id: ID!
    name: String!
    description: String
    users: [UserProfile!]
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
