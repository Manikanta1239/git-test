# Node.js Module Practice Project

A demonstration project showing how to create and use custom Node.js modules.

## Project Overview

This project demonstrates:
- Creating custom Node.js modules
- Exporting and importing modules
- Working with different module patterns
- Basic file operations with Node.js

## Features

- Track books you're currently reading
- Mark books as read/unread
- Add notes and progress updates
- Store reading data in JSON format
- Basic mathematical calculations for reading stats

## Installation

```bash
# Clone the repository
git clone https://github.com/Manikanta1239/git-test.git

# Navigate to project directory
cd Reading-Tracker

# Install dependencies
npm install
```

## Usage

```bash
# Run the main application
node server.js

# Test math module
node math.js

# Test package utilities
node pack.js
```

## Project Structure

```plaintext
Reading-Tracker/
├── math.js       # Custom math operations module
├── pack.js       # Package utilities module
├── server.js     # Main application file
├── db.json       # Data storage file
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

## Code Examples

```javascript
// Import custom modules
const math = require('./math.js');
const pack = require('./pack.js');

// Use math module
const result = math.add(5, 3);

// Use package utilities
pack.someFunction();
```

## Learning Objectives

- Understanding module.exports
- Creating reusable code modules
- Implementing different module patterns
- Working with file-based modules

## Dependencies

- Node.js
- Express.js
- Other relevant packages...

## Author

Manikanta S
- GitHub: [@Manikanta1239](https://github.com/Manikanta1239/git-test)
- Email: smanikanta1239@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).