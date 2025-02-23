const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Store books in memory for testing
let books = [];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json(book);
});

// DELETE all books
app.delete('/books', (req, res) => {
    books = [];
    res.json({ message: 'All books deleted' });
});

// Server setup
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
