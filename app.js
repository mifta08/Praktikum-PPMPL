const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World! Im back');
});

// ANCHOR Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

//ANCHOR Data saving endpoint
app.post('/data', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    res.status(201).json({ message: `Data for ${name} saved` });
});

module.exports = app;