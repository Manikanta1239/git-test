# Node.js Module Practice Project

A demonstration project for learning and implementing custom Node.js modules with practical examples.

## 🚀 Project Overview

This project demonstrates:
- Creating and using custom Node.js modules
- Different module import/export patterns
- Module destructuring techniques
- File-based module organization
- Basic arithmetic operations implementation

## Features

- Track books you're currently reading
- Mark books as read/unread
- Add notes and progress updates
- Store reading data in JSON format
- Basic mathematical calculations for reading stats

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Basic JavaScript knowledge

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/Manikanta1239/git-test.git

# Navigate to project directory
cd Reading-Tracker

# Install dependencies
npm install
```

## 💻 Usage Examples

### Basic Module Import
```javascript
// Standard import
const math = require('./math');
console.log(math.add(2, 3));  // Output: 5

// Destructured import
const { add, sub } = require('./math');
console.log(add(4, 3));       // Output: 7
```

### Advanced Module Usage
```javascript
// Renamed imports
const { add: addition, sub: subtraction } = require('./math');
console.log(addition(5, 3));   // Output: 8

// Rest parameter usage
const { add: sum, ...others } = require('./math');
console.log(others.mul(2, 4)); // Output: 8
```

## 🧪 Testing Modules

```bash
# Test mathematical operations
node math.js

# Test different import patterns
node pack.js

# Run the main application
node server.js
```

## ⚙️ Project Structure

```plaintext
Reading-Tracker/
├── math.js       # Mathematical operations module
│   ├── Basic arithmetic (add, sub, mul, div)
│   └── Custom calculations
├── pack.js       # Module usage demonstrations
│   ├── Different import methods
│   └── Function implementations
├── server.js     # Main application file
├── db.json       # Data storage
└── README.md     # Documentation
```

## Modules Description

### math.js
Custom mathematical operations module that includes:
- Basic arithmetic operations
- Custom calculations
- Mathematical utility functions

### pack.js
Package utilities module demonstrating:
- Module exports
- Function implementations
- Utility helpers

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /books   | Get all books |
| POST   | /books   | Add new book |
| PUT    | /books/:id | Update book progress |
| DELETE | /books/:id | Remove book |

## 📚 Learning Topics

1. Module Export Patterns
   - module.exports
   - exports object
   - Named exports

2. Import Techniques
   - Full module import
   - Destructuring
   - Renamed imports
   - Rest parameters

3. Best Practices
   - Module organization
   - Code reusability
   - Error handling

## 👨‍💻 Author

**Manikanta S**
- GitHub: [@Manikanta1239](https://github.com/Manikanta1239/git-test)
- Email: smanikanta1239@gmail.com

## 📌 Notes

- This is a learning project focusing on Node.js modules
- Examples are designed for educational purposes
- Code includes detailed comments for better understanding