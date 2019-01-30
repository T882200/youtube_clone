import express from 'express';

const server = express();
const PORT = 8081;

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));