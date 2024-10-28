const express = require('express');
const app = express();
const controller = require('./controller'); // Pastikan ini mengarah ke controller yang benar

app.use(express.json());

const port = process.env.PORT || 3000; // Menentukan port

// Rute GET untuk mendapatkan semua item
app.get('/api/items', controller.getItems);

// Rute POST untuk menambah item baru
app.post('/api/items', controller.createItem); // Pastikan hanya ada satu

// Rute PUT untuk memperbarui item
app.put('/api/items/:id', controller.updateItem);

// Rute DELETE untuk menghapus item berdasarkan ID
app.delete('/api/items/:id', controller.deleteItem); // Pastikan nama fungsinya benar

// start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});

module.exports = app;
