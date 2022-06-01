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
}

module.exports = {
  UserApi,
};
