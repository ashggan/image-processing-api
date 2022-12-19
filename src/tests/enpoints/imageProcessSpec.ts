import supertest from 'supertest';
import app from '../..';
const request = supertest(app);

describe('image Process endpoint testing ', () => {
  const imageProcessApi = '/images?filename=test.jpg&height=400&width=500';

  it('should response 200', async () => {
    const response = await request.get(imageProcessApi);
    expect(response.status).toBe(200);
  });
});
