"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: '*',
    methods: ['GET']
});
server.get('/ping', async (request, reply) => {
    return 'pong\n';
});
server.get('/people', async (request, reply) => {
    return [
        { name: 'Alice', age: 25, email: 'alice@example.com' },
        { name: 'Bob', age: 30, email: 'bob@example.com' },
        { name: 'Charlie', age: 35, email: 'charlie@example.com' },
        { name: 'Jan', age: 24, email: 'johnnyciepiela@gmail.com' }
    ];
});
server.get('/time', async (request, reply) => {
    return { time: new Date().toLocaleTimeString() };
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
