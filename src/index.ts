import express from 'express';
import fs from 'fs';
import path from 'path';
import type { User } from './types.ts';
const app = express();
import dotenv from 'dotenv';
dotenv.config({path: "./.env.local"});
const PORT = process.env.PORT;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});


const data: Array<User> = [
    {"uid":1,"age":48,"sex":"male","name":"David","email":"example@google.com"},
    {"uid":2,"age":18,"sex":"male","name":"Stu","email":"example@google.com"},
    {"uid":3,"age":34,"sex":"female","name":"Jody","email":"example@google.com"}
]

// GET /api/users
app.get('/api/users', (req, res) => {
    res.send(data); 
    res.sendStatus(200);
})
// GET /api/users/1
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
        return res.status(400).send({ error: 'Invalid user ID' });
    }
    else {
        const user = data.find(u => u.uid === userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    }
});
// order Users by age
// GET /api/users?sort=asc
app.get('/api/usersOrder', (req, res) => {
    type order = 'asc' | 'desc' 
    let sortBy = req.query.sort as order | undefined;
    if(sortBy === undefined) {res.status(404).send({ error: 'Order for sorting data not found' });}
    else{
        let sortedData = [...data];
        if(sortBy === 'asc') {
            sortedData.sort((a, b) => a.age - b.age);
        } else if(sortBy === 'desc') {
            sortedData.sort((a, b) => b.age - a.age );
        }
        res.json(sortedData);
    }
})
// filter Users by name
// GET /api/users?name=David
app.get('/api/usersFilter', (req, res) => {
    let nameFilter = req.query.name as string | undefined;
    if(nameFilter === undefined) {res.status(404).send({ error: 'Name for filtering data not found' });}
    else{
        let filteredData = data.filter(user => user.name.toLowerCase() === nameFilter?.toLowerCase());
        res.json(filteredData);
    }
})
app.use(express.json());
// POST /api/users
app.post('/api/users', express.json(), (req, res) => {
    const { body } = req;
    if(data.length > 0) {
        const newUser: User = { uid : data.length + 1, ...body }
        data.push(newUser);
        res.status(201).json(newUser);
    }
    else{ 
        const newUser: User = { uid : 1, ...body }
        data.push(newUser);
        res.status(201).json(newUser);
    }
    console.log(body);
})