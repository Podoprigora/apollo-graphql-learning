const { http } = require('./http');

class HeroApi {
  static async fetchById(id) {
    const response = await http.get(`/heroes/${id}`);

    return response.data;
  }
}

module.exports = {
  HeroApi,
};
