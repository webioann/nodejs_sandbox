const express = require('express');
const fs = require('fs');
const app = express();      
const PORT = 8383;

// app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//     let url = req.url;
//     let method = req.method;
//     console.log(method, url);
//     res.send(`<h1>Hello from server again and again</h1>`);
//     res.sendStatus(200)
//     res.end();
// })
// API endpoint
// app.get('/api/data', (req, res) => {
//     const data = fs.readFileSync('./server/db/raw.json', 'utf8');
//     res.send(data); 
//     res.end();
// });
// POST endpoint
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/data', (req, res) => {
    let data = `, ${JSON.stringify(req.body)}`
    fs.appendFileSync('./server/db/usersDB.js', data, 'utf8');
    console.log(`Received name: ${data}`);
    res.sendStatus(201);
    res.end();
});

app.listen(PORT);
