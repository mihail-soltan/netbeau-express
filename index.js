import hapi from '@hapi/hapi';
import { getUsers, addUser, getUsersByFirstName, getUserById } from './controllers/users.js';
import HapiCors from 'hapi-cors';

import connectToDatabase from './models/connection.js';

const Hapi = hapi;

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});
await server.register({
    plugin: HapiCors,
    options: {
        origins: ['*']
    }
});
async function start() {
    try {
        await connectToDatabase();
        console.log('Connected to database');
        // Define your routes here
        server.route({
            method: 'GET',
            path: '/users',
            options: {
                cors: true
            },
            handler: getUsers
        });
        server.route({
            method: 'POST',
            path: '/users',
            options: {
                cors: true
            },
            handler: addUser
        })
        server.route({
            method: 'GET',
            path: "/users/{id}",
            options: {
                cors: true
            },
            handler: getUserById
        })

        server.route({
            method: 'GET',
            path: '/users/find',
            handler: getUsersByFirstName
          });
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

start();