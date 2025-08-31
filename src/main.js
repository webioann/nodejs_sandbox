const os = require('os');
const fs = require('fs');
const path = require('path');

const parse = async () => {
    const data = fs.readFile(__dirname.concat('/data.txt'), 'utf-8', (error, content) => {
        if (error) throw new Error('Error');
        console.log(`Data from file ==>  ${content}`)});
    await fs.appendFile('D:/textFile.txt', data, 'utf-8');
    await fs.readFile('D:/textFile.txt', 'utf-8', (error, content) => {
        if (error) throw new Error('Error');
        console.log(`Data from file ==>  ${content}`);
    });
}

parse();
