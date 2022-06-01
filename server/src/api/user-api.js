const { http } = require('./http');

class UserApi {
  static async fetchAll() {
    const response = await http.get(`/users`);

    return response.data;
  }

  static async fetchById(id) {
    const response = await http.get(`/users/${id}`);

    return response.data;
  }

  static async save(content) {
    const response = await http.post('/users', content);

    return response.data;
  }
}

module.exports = {
  UserApi,
};
