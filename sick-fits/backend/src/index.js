const cookieParser = require('cookie-parser'); // let's go! - app entry point!!!
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser()); // allow for use of the cookie object, Express handle COOKIES (JWT)

// Decode the JWT so we can get the user id on each request
server.express.use((req, res, next) => {
  // stepping in between the flow.
  const { token } = req.cookies;
  if(token){
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});
// TODO middlewware to populate users

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);