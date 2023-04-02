import Hapi from '@hapi/hapi';
import { getUsers, getUserById, getUsersByFirstName, addUser } from '../controllers/users';

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/users',
    handler: getUsers
});