const express = require('express');
const errorHandler = require('./middleware/erroHandler');
const { connect } = require('mongoose');
const connectDb = require('./config/dbconnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/contacts', require("./routes/contactsRoutes"));
app.use('/api/user', require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});