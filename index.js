// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Simple GET endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Another GET route
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

