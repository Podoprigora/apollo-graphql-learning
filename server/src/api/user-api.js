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

  static async save(record) {
    const { id } = record;

    if (id) {
      const response = await http.patch(`/users/${id}`, record);

      return response.data;
    } else {
      const response = await http.post('/users', record);

      return response.data;
    }
  }

  static async delete(id) {
    await http.delete(`/users/${id}`);

    return { id };
  }
}

module.exports = {
  UserApi,
};
