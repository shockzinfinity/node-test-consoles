const express = require('express');
require('dotenv').config();
require('./database/config').dbConnection();

const app = express();
app.use(express.json());
const server = require('http').createServer(app);
app.use('/api/user', require('./routes/users'));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on port: ", process.env.PORT);
});