import express from 'express';
import fs from 'fs';
import path from 'path';

const content = '\nThis is some content to write to the file.';
const content2 = '\nThis is some content to write to the file.';

type LoggerParamsType = {
    message: string;
    level: 'info' | 'warn' | 'error';

}

const logger = ({message, level}: LoggerParamsType) => {
    const infoFolder = path.join('logs', 'info');
    const warnFolder = path.join('logs', 'warn');
    const errorFolder = path.join('logs', 'error');

    fs.writeFile(path.join('src', 'output.txt'), content, err => {
        if (err) {  
            console.error(err);
            return;
        }
        fs.appendFile(path.join('src', 'output.txt'), content, err => {
            if (err) {  
                console.error(err);
                return;
            }
            console.log('Folder was created and content appended to file');
        });

        console.log('File has been written');
    });

}

