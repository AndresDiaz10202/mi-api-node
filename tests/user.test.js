const request = require('supertest');
const express = require('express');
const userRoutes = require('../api/routes/user.routes');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

// Mockear la base de datos
jest.mock('../api/models/db', () => ({
  query: jest.fn(),
}));

const pool = require('../api/models/db');

describe('User API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/users devuelve lista de usuarios', async () => {
    // Mockear resultado de DB
    pool.query.mockResolvedValue({
        rows: [{ id: 1, username: 'andy', password: 'secreta' }],
    });

    // Crear token con misma clave del .env
    const token = jwt.sign(
        { id: 1, username: 'andy' },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    // Hacer request con token en encabezado Authorization
    const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${token}`);

    // Verificar respuesta
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].username).toBe('andy');
    });

  test('POST /api/users crea un usuario', async () => {
    pool.query.mockResolvedValue({});

    const res = await request(app)
      .post('/api/users')
      .send({ username: 'testuser', password: '1234' });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toMatch(/creado/i);
  });
});
