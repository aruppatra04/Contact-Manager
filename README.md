# Contact Management System

The **Contact Management System** is a robust and scalable web application designed to efficiently manage contacts. This system allows users to securely store, retrieve, update, and delete contact information while ensuring data security and privacy. With user authentication implemented via **JWT (JSON Web Token)**, each user's data remains isolated and protected. Built with **Express.js** and **MongoDB**, this application provides a RESTful API, making it easy to integrate with other services and frontend applications.

## Features
- User authentication using JWT (JSON Web Token)
- Add new contacts
- View all contacts
- Update existing contacts
- Delete contacts
- Contacts are stored individually per user
- RESTful API with Express.js
- MongoDB as the database

## File Structure
```
contact-management-system/
├── config/
│   ├── db.js           # Database connection setup
├── controllers/
│   ├── authController.js  # Handles user authentication
│   ├── contactController.js  # Manages contact CRUD operations
├── middleware/
│   ├── authMiddleware.js  # Middleware for protecting routes
├── models/
│   ├── User.js  # User schema and model
│   ├── Contact.js  # Contact schema and model
├── routes/
│   ├── authRoutes.js  # Authentication-related routes
│   ├── contactRoutes.js  # Contact management routes
├── .env  # Environment variables
├── .gitignore  # Files to be ignored in version control
├── package.json  # Project metadata and dependencies
├── server.js  # Main entry point of the application
├── README.md  # Project documentation
```

## Installation

### 1. Fork the Repository
First, fork this repository to your GitHub account.

### 2. Clone the Repository
```sh
git clone <your-forked-repo-url>
cd contact-management-system
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the project root and add your MongoDB connection string:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

## Running the Server

### Start the Server
```sh
npm run start
```

### Start in Development Mode
For development purposes, use **nodemon** to automatically restart the server on changes:
```sh
npm run dev
```

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Token) for authentication**
- **Nodemon** (for development)

## License
This project is licensed under the **MIT License**.

---

🚀 Happy Coding! Feel free to contribute by submitting pull requests. 😊

