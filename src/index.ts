import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express();
import { data } from './data.ts';
import dotenv from 'dotenv';
dotenv.config({path: "./.env.local"});
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and DATA: ${data[1]?.name}`);});


