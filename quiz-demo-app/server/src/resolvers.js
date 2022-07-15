const { ModuleApi, UserApi } = require('./api');

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

  ModuleListItem: {
    async userInfo() {
      return UserApi.getRandomOne();
    },
    async questionsTotal(parent) {
      const { id } = parent;
      const data = await ModuleApi.fetchQuestions(id);

      return data.length;
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
  resolvers,
};
