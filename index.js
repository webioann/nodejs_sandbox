const {first} = require('goffy');
const fs = require('fs');
const path = require('path');

let pathToDirectory = './modules';
let pathToFile = './modules/first_module.js';

// check if directory exists
const checkDirectoryOrFileExists = (pathTo) => {
    let result = fs.existsSync(pathTo);
    if (!result) {
        console.error(`Directory or file does not exist: ${pathTo}`);
    }   
    else {
        console.log(`Directory or file exists: ${pathTo}`);
    }
}

// output file stats information
const fileStatsInfo = (arg_pathToFile) => {
    let fileExists = fs.existsSync(arg_pathToFile);
    let stats = null;
    fileExists ? stats = fs.statSync(arg_pathToFile) : console.error(`File does not exist: ${arg_pathToFile}`);
    stats && (console.log(`File size: ${stats.size} bytes.`), console.table(stats));
}

// parse file and directory paths
const parsePath = (arg_path) => {
    let parsedPath = path.parse(arg_path);
    console.table(parsedPath)
}

// get list all files in a directory
const getListOfFilesInDirectory = (arg_pathToDirectory) => {
    let files = fs.readdirSync(arg_pathToDirectory);
    if (files.length === 0) {
        console.log(`No files found in directory: ${arg_pathToDirectory}`);
    } else {
        console.log(`Files in directory ${arg_pathToDirectory}:`);
        files.forEach(file => console.log(file));
    }
}


first()
checkDirectoryOrFileExists(pathToDirectory)
checkDirectoryOrFileExists(pathToFile)
fileStatsInfo(pathToFile);
parsePath(pathToFile);
getListOfFilesInDirectory('../NodeJS_sandbox');

// temporary code to test the module
console.log(`Absolute path to directory: ${__dirname}`);