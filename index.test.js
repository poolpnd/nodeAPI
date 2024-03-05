const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('POST /post', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).post('/post');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user/:id', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user/123');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('PUT /user/:id', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).put('/user/123');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('DELETE /user/:id', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).delete('/user/123');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user/:id/:name', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user/123/john');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user/:id/:name/:age', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user/123/john/25');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user/:id/:name/:age/:city', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user/123/john/25/newyork');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user/:id/:name/:age/:city/:country', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user/123/john/25/newyork/usa');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

describe('GET /user/:id/:name/:age/:city/:country/:state', () => {
    it('should return "Hello from node API2"', async () => {
        const response = await request(app).get('/user/123/john/25/newyork/usa/ny');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from node API2');
    });
});

// Add more test cases for other routes...