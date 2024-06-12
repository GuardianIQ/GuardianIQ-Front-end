const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const expressApp = express();

expressApp.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

async function getUsers() {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data).usuarios;
}

async function saveUsers(users) {
    const data = { usuarios: users };
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

expressApp.post('/register', async (req, res) => {
    try {
        const newUser = req.body;
        newUser.contrasenia = await bcrypt.hash(newUser.contrasenia, 10);
        const users = await getUsers();
        users.push(newUser);
        await saveUsers(users);
        res.status(200).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

expressApp.post('/login', async (req, res) => {
    try {
        const { correo, contrasenia } = req.body;
        const users = await getUsers();
        const user = users.find(user => user.correo === correo);
        if (user && await bcrypt.compare(contrasenia, user.contrasenia)) {
            res.status(200).send('Logged in successfully');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

expressApp.listen(3000, () => console.log('Server running on port 3000'));
