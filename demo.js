console.log('Hello world!');
const http = require('http');

const server = http.createServer((request, response) =>
{
    console.log('Recibiendo peticiones');
    response.write('<h1>Hola mundo</h1>');
    response.end;
})

server.listen(5555);
console.log('Servidor levantado');