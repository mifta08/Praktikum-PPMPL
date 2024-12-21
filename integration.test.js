const request = require('supertest');
const app = require('./app');

describe('Integration Tests', () => {
    //ANCHOR Test for the health endpoint
    it('should return health status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status', 'UP');
    });

    //ANCHOR Test for the data endpoint - successful save
    it('should save data successfully', async () => {
        const res = await request(app)
            .post('/data')
            .send({ name: 'John Doe' });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('message', 'Data for John Doe saved');
    });

    //ANCHOR Test for the data endpoint - missing name
    it('should return 400 for missing name', async () => {
        const res = await request(app).post('/data').send({});
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error', 'Name is required');
    });
});
