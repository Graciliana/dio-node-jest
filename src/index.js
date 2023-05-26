import express from 'express';
const server = express();
server.listen(5000, () => {
  console.log('Server listening on port 5000')
})