// let's go! - app entry point!!!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO Express handle COOKIES (JWT)
// TODO middlewware to populate users

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEN_URL,
    },
  },
  deets => {
    console.log(`Server is now running on post http:/localhost:${deets.port}`);
  }
);