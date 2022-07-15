import { ModuleApi, UserApi } from './api';

export const resolvers = {
  Query: {
    async modules(_: any, args: any) {
      const { pagination } = args;

      return ModuleApi.fetchAll(pagination);
    },
    async module(_: any, args: any) {
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
    async questionsTotal(parent: any) {
      const { id } = parent;
      const data = await ModuleApi.fetchQuestions(id);

      return data.length;
    },
  },

  ModuleProfile: {
    async questions(parent: any) {
      const { id } = parent;

      return ModuleApi.fetchQuestions(id);
    },
  },

  UserInfo: {
    fullName(parent: any) {
      const { firstName, lastName } = parent || {};

      return [firstName, lastName].join(' ');
    },
  },

  Mutation: {
    async saveModule(_: any, args: any) {
      const { params } = args;
      return await ModuleApi.save({ ...params });
    },
    async deleteModule(_: any, args: any) {
      const { id } = args;

      return ModuleApi.delete(id);
    },
  },
};
