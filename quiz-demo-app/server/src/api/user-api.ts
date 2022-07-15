import _get from 'lodash/get';
import { v4 as uuid } from 'uuid';

import { http } from './http';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
}

export class UserApi {
  static async getRandomOne(): Promise<User> {
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
