const { http } = require('./http');

class CompanyApi {
  static async fetchAll() {
    const response = await http.get(`/companies`);

    return response.data;
  }

  static async fetchById(id) {
    const response = await http.get(`/companies/${id}`);

    return response.data;
  }

  static async fetchUsers(id) {
    const response = await http.get(`/companies/2/users`);

    return response.data;
  }
}

module.exports = {
  CompanyApi,
};
