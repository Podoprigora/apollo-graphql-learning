const _get = require('lodash/get');
const { v4: uuid } = require('uuid');

const { http } = require('./http');

class UserApi {
  static async getRandomOne() {
    const response = await http.get('https://randomuser.me/api', {
      params: {
        format: 'json',
        inc: 'name,email,picture',
        noinfo: true,
      },
    });

    const result = _get(response, 'data.results[0]', {});

    return {
      id: _get(result, 'id.value', uuid()),
      firstName: _get(result, 'name.first', ''),
      lastName: _get(result, 'name.last', ''),
      email: _get(result, 'email', ''),
      pictureUrl: _get(result, 'picture.thumbnail', ''),
    };
  }
}

module.exports = {
  UserApi,
};
