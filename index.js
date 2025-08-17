const fs = require('fs');
const path = require('path');

// function for reading txt files
const readTextFile = () => {
    let textFrom = fs.readFileSync('./src/text.txt', {
        encoding: 'utf8',
        flag: 'r'
    });
    console.log(textFrom)
}

// write to file
const text = 'I am new text';
const pathTo = './src/new222.txt';
const pathTo2 = './src/newfile.txt';

const writeTextIntoFile = (pathTo, newText) => {
    fs.writeFileSync(pathTo, newText, {
        encoding: 'utf8',
        flag: 'a'
    })
    console.log('File written successfully');
}

// write file from array
const textArray = ['Hello', 'World', '.?????', 'This', 'is', 'a', 'new', 'text'];

const writeArrayToFile = (pathTo, array) => {
    fs.writeFileSync(pathTo, array.join(" "), {
        encoding: 'utf8',
        flag: 'a'
    });
    console.log('Array written to file successfully');
}


readTextFile();
writeTextIntoFile(pathTo, text);
writeArrayToFile(pathTo2, textArray);
