const express = require('express');
const app = express();      
const PORT = 8383;

// app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    let url = req.url;
    let method = req.method;
    console.log(method, url);
    res.send(`<h1>Hello from server again and again</h1>`);
    res.sendStatus(200)
    res.end();
})

app.listen(PORT);
