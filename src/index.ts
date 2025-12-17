import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';
// import { data } from './data.ts';
// import { add, multiply, subtract, divide } from './math.ts';
// .env configuration
import dotenv from 'dotenv';
import { dir } from 'node:console';
dotenv.config({path: "./.env.local"});

const app = express();

const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


// Read text file
fs.readFile(path.join('src', 'text.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// app.use(express.static(path.join(__dirname, 'src')));

const logMassage = `Server is running on port ${PORT} and OS ${fs}`

app.listen(PORT, () => { 
    console.log(logMassage)
    console.log(__dirname) 
    console.log(path.parse(__dirname).dir)
});


