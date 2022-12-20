import supertest from 'supertest';
import app from '../..';
const request = supertest(app);

describe('image Process endpoint testing ', () => {
  const imageProcessApi = '/images?filename=test.jpg&height=400&width=500';
  const ApiwtihoutParams = '/images?height=400&width=500';
  const wrongUrl = '/images?filename=test.jpg&height=hh&width=500';

  it('should response 200', async () => {
    const response = await request.get(imageProcessApi);
    expect(response.status).toBe(200);
  });

  it('should response -filename is missing - 400', async () => {
    const response = await request.get(ApiwtihoutParams);
    expect(response.status).toBe(400);
  });

  it('should response -height and width are not numbers - 400 ', async () => {
    const response = await request.get(wrongUrl);
    expect(response.status).toBe(400);
  });
});
