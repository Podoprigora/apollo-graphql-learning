const { http } = require('./http');

class ModuleApi {
  static async fetchAll(pagination) {
    const { page = 1, limit = 20 } = pagination || {};

    const response = await http.get('/modules', {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    return response.data;
  }
  static async fetchById(id) {
    const response = await http.get(`/modules/${id}`);

    return response.data;
  }

  static async fetchQuestions(moduleId) {
    const response = await http.get('/questions', {
      params: {
        moduleId,
        _embed: 'options',
      },
    });

    return response.data;
  }
}

module.exports = {
  ModuleApi,
};
