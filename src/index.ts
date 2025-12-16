import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express();
import { data } from './data.ts';
import { add, multiply, subtract, divide } from './math.ts';
import { dirname } from 'node:path';
// .env configuration
import dotenv from 'dotenv';
dotenv.config({path: "./.env.local"});
const PORT = process.env.PORT || 3000;
// Read text file
fs.readFile(path.join('src', 'text.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
// Write to text file
const content = 'This is some content to write to the file.';
// fs.writeFile(path.join('src', 'output.txt'), content, err => {
//     if (err) {  
//         console.error(err);
//         return;
//     }
//     console.log('File has been written');
// });
// Append file and folder creation
fs.appendFile(path.join('src', 'output.txt'), content, err => {
    if (err) {  
        console.error(err);
        return;
    }
    console.log('Folder was created and content appended to file');
});



const logMassage = `Server is running on port ${PORT} and OS ${fs}`

app.listen(PORT, () => {
    console.log(logMassage)
    console.log(add(5, 3));
});


