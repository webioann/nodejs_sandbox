const fs = require('fs');
const path = require('path');
const { myJSON } = require('./modules/jsonfile_module.js');

const textArray = ['Hello', 'World', '.?????', 'This', 'is', 'a', 'new', 'text'];
const text = 'I am new text';
const pathTo = './src/new222.txt';
const pathTo2 = './src/newfile.txt';
const jsonData = {  
    "apple": "red",
    "banana": "yellow",
    "grape": "purple",
    "carrot": "orange",
    "broccoli": "green",
    "potato": "brown",
    "blueberry": "blue"
}


// function for reading txt files
const readTextFile = () => {
    let textFrom = fs.readFileSync('./src/text.txt', {
        encoding: 'utf8',
        flag: 'r'
    });
    console.log(textFrom)
}

// write to file
const writeTextIntoFile = (pathTo, newText) => {
    fs.writeFileSync(pathTo, newText, {
        encoding: 'utf8',
        flag: 'a'
    })
    console.log('File written successfully');
}

// write file from array
const writeArrayToFile = (pathTo, array) => {
    fs.writeFileSync(pathTo, array.join(" "), {
        encoding: 'utf8',
        flag: 'a'
    });
    console.log('Array written to file successfully');
}

// read and write JSON file
const readJSONFile = () => {
    let result = fs.readFileSync('./modules/json2.json', {
        encoding: 'utf8',
        flag: 'r'
    });
    console.table(JSON.parse(result));
}
const writeJSONToFile = () => {
    fs.writeFileSync('./server/db/user.json', JSON.stringify(jsonData), {
        encoding: 'utf8',
        flag: 'w'
    });
    console.log('JSON file written successfully');
}


// readTextFile();
// writeTextIntoFile('./src/jsonnewfile.txt', myJSON.apple);
// writeArrayToFile(pathTo2, textArray);
readJSONFile();
writeJSONToFile();

