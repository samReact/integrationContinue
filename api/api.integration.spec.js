const request = require('supertest');
const app = require('../app');

const { API_ROOT_PATH } = require('./router');

describe('API root', () => {
  describe('GET', () => {
    it('responds with "Successfully hit API root"', async () => {
      const response = await request(app).get(`${API_ROOT_PATH}/`);
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.text)).toEqual({
        text: 'Successfully hit API root',
      });
    });
  });
});
