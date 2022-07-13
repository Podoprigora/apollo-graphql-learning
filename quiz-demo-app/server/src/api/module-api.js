const { http } = require('./http');

class ModuleApi {
  static async save(params = {}) {
    const { id: moduleId, questions = [], ...moduleRestParams } = params;

    if (moduleId) {
      // Update module
      const response = await http.patch(`/modules/${moduleId}`, moduleRestParams);

      for (const question of questions) {
        const { options = [], ...questionRestParams } = question;
        let questionId = question?.id;

        // Create / Update question
        if (questionId) {
          await http.patch(`/questions/${questionId}`, questionRestParams);
        } else {
          const questionResponse = await http.post('/questions', {
            ...questionRestParams,
            moduleId,
          });
          questionId = questionResponse.data?.id;
        }

        await Promise.all(
          options.map(async (option) => {
            const { id: optionId, ...optionRestParams } = option;

            // Create / Update Option
            if (optionId) {
              await http.patch(`/options/${optionId}`, optionRestParams);
            } else {
              await http.post('/options', { ...optionRestParams, questionId });
            }
          })
        );
      }

      return response.data;
    } else {
      // Add module
      const response = await http.post('/modules', {
        ...moduleRestParams,
        isActive: true,
      });
      const moduleId = response.data?.id;

      for (const question of questions) {
        const { options = [], ...questionRestParams } = question;

        // Add question
        const questionResponse = await http.post('/questions', {
          ...questionRestParams,
          moduleId,
        });
        const questionId = questionResponse.data?.id;

        await Promise.all(
          options.map(async (option) => {
            // Add Option
            await http.post('/options', { ...option, questionId });
          })
        );
      }
      return response.data;
    }
  }

  static async delete(id) {
    const response = await http.patch(`/modules/${id}`, {
      isActive: false,
    });

    return response.data;
  }

  static async fetchAll(pagination) {
    const { page = 1, limit = 20 } = pagination || {};

    const response = await http.get('/modules', {
      params: {
        isActive: true,
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
