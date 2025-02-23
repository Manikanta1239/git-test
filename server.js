const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(5500,()=> {
    console.log('the server is running....');
});
