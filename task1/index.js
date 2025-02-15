const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();
const date = new Date();
let users = [];

app.use((req, res, next) => {
    if (req.path === '/index.html') {
        const user = {
            logInTime: date.toISOString(),
            userIP: req.ip
        };
        users.push(user);
        fs.writeFileSync('./data/visitLogs.json', JSON.stringify(users));
    }
    next();
});

app.use(express.static('public'));

app.get('/logs', (req, res) => {
    const stringData = fs.readFileSync('./data/visitLogs.json');
    const objectData = JSON.parse(stringData);
    res.json(objectData);
});

app.listen(port, () => {
    console.log(`Go to: http://127.0.0.1:${port}/index.html`);
    fs.writeFileSync('./data/visitLogs.json', "[]");
});
