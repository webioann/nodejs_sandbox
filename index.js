const http = require('http');
const PORT = 7777;
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html; charset=utf-8;');
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        // Add more mime types as needed
    };

    switch (url) {
        case '/':
            let homeHTML = fs.readFileSync('./src/public/home.html', {
                encoding: 'utf-8',
                flag: 'r'
            });
            const homeStyles = fs.readFileSync('./src/public/styles.css', {
                encoding: 'utf-8',
                flag: 'r'   
            });
            res.write(homeHTML);
            break;
        case '/about':
            let aboutHTML = fs.readFileSync('./src/public/about.html', {
                encoding: 'utf-8',
                flag: 'r'
            });
            res.write(aboutHTML);
            break;
        case '/contact':
            let contactHTML = fs.readFileSync('./src/public/contact.html', 'utf-8');
            res.write(contactHTML);
            break;
        default:
            let notfoundHTML = fs.readFileSync('./src/public/notfound.html', 'utf-8');
            res.write(notfoundHTML);
    }
    res.end();
}).listen(PORT);
