const http = require('http');
const PORT = 7777;

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8;');
    res.write('<h1>Output this text on page</h1>')
    console.log('server running on port', PORT);
    res.end();
}).listen(PORT);
