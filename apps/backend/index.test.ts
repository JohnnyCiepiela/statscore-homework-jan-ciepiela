import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fastify from 'fastify';

const server = fastify();

server.get('/ping', async () => {
  return 'pong\n';
});

server.get('/people', async () => {
  return [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
    { name: 'Jan', age: 24, email: 'johnnyciepiela@gmail.com' },
  ];
});

beforeAll(async () => {
  await server.listen({ port: 8081 });
});

afterAll(async () => {
  await server.close();
});

describe('Fastify Server API Endpoints', () => {
  it('should return "pong" from /ping', async () => {
    const response = await server.inject({ method: 'GET', url: '/ping' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('pong\n');
  });

  it('should return an array of people from /people', async () => {
    const response = await server.inject({ method: 'GET', url: '/people' });
    expect(response.statusCode).toBe(200);
    const json = JSON.parse(response.body);
    expect(Array.isArray(json)).toBe(true);
    expect(json.length).toBeGreaterThan(0);
    expect(json[0]).toHaveProperty('name');
    expect(json[0]).toHaveProperty('age');
    expect(json[0]).toHaveProperty('email');
  });

  it('should contain "Jan" in the /people response', async () => {
    const response = await server.inject({ method: 'GET', url: '/people' });
    expect(response.statusCode).toBe(200);
    const json = JSON.parse(response.body);
    const alice = json.find((p: any) => p.name === 'Jan');
    expect(alice).toBeDefined();
    expect(alice.age).toBe(24);
    expect(alice.email).toBe('johnnyciepiela@gmail.com');
  });
});
