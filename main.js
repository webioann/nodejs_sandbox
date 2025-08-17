const fs = require('fs');
const path = require('path');
const data = {  
    "uid": 1,
    "age": 48,
    "sex": "male",
    "name": "John Doe",
    "email": "example@google.com"
}
const pathToDB = './server/db';


const createDirAndFile = async() => {
    try {
        await fs.promises.mkdir(pathToDB, { recursive: true });
        if (fs.existsSync(pathToDB)) {
            await fs.promises.writeFile(pathToDB.concat('/user.json'), JSON.stringify(data), 'utf8');
            console.log('File created successfully');
        }
        else console.log('Directory already exists');
    }
    catch (error) {
        console.error('Error creating directory:', error);
        return;
    }
}
createDirAndFile();