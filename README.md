# Contact Management System

The **Contact Management System** is a robust and scalable web application designed to efficiently manage contacts. This system allows users to securely store, retrieve, update, and delete contact information while ensuring data security and privacy. With user authentication implemented via **JWT (JSON Web Token)**, each user's data remains isolated and protected. Built with **Express.js** and **MongoDB**, this application provides a RESTful API, making it easy to integrate with other services and frontend applications.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- User authentication using JWT (JSON Web Token)
- Add new contacts
- View all contacts
- Update existing contacts
- Delete contacts
- Contacts are stored individually per user
- RESTful API with Express.js
- MongoDB as the database

## Prerequisites
Before running this project, ensure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Git** (for cloning the repository)
- A code editor like **VS Code**

## File Structure

```
contact-management-system/
├── config/
│   ├── dbConnection.js       # Database connection setup
├── controllers/
│   ├── contactController.js  # Manages contact CRUD operations
│   ├── userController.js     # Handles user authentication
├── middleware/
│   ├── errorHandler.js       # Handles errors globally
│   ├── validateTokenHandler.js  # Middleware for validating JWT tokens
├── models/
│   ├── contactModel.js       # Contact schema and model
│   ├── userModel.js          # User schema and model
├── routes/
│   ├── contactsRoutes.js     # Contact management routes
│   ├── userRoutes.js         # User-related routes
├── node_modules/             # Dependencies (auto-generated)
├── .env                      # Environment variables
├── .gitignore                # Files to be ignored in version control
├── constants.js              # Constants used in the application
├── package-lock.json         # Auto-generated dependency lock file
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation
├── server.js                 # Main entry point of the application
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

