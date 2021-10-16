const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
var cors = require('cors')

require('./db.js');

const server = express();

server.name = 'API';



server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// server.use(cors({credentials: true}))
// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://192.168.0.144:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
server.use(cors());
server.use('/api', routes);

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.log(`STATUS: ${status} -- MESSAGE: ${message}`)
  res.status(status).send(message);
  next()
});

module.exports = server;
