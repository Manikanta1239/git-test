// Runs on local system without mongoose
const express = require('express');
const fs = require('fs');
const app = express();

const dbFilePath = './db.json';

// Middleware to parse JSON bodies
app.use(express.json());

// Helper function to read books from the file
const readBooksFromFile = () => {
    if (!fs.existsSync(dbFilePath)) {
        return [];
    }
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
};

// Helper function to write books to the file
const writeBooksToFile = (books) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(books, null, 2));
};

// GET all books
app.get('/books', (req, res) => {
    const books = readBooksFromFile();
    res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
    const books = readBooksFromFile();
    const book = req.body;
    books.push(book);
    writeBooksToFile(books);
    res.status(201).json(book);
});

// PUT to update a book by id
app.put('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const { id } = req.params;
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = updatedBook;
        writeBooksToFile(books);
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// DELETE a book by id
app.delete('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const { id } = req.params;
    const newBooks = books.filter(book => book.id !== id);
    if (newBooks.length !== books.length) {
        writeBooksToFile(newBooks);
        res.json({ message: 'Book deleted' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// DELETE all books
app.delete('/books', (req, res) => {
    writeBooksToFile([]);
    res.json({ message: 'All books deleted' });
});

// Server setup
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// GET a book by id
app.get('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const { id } = req.params;
    const book = books.find(book => book.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

/*
    Input:
    GET /books/123
    Output:
    {
        "id": "123",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
    }
    Input:
    GET /books/456
    Output:
    {
        "message": "Book not found"
    }
*/
