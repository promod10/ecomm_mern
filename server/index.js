const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express()
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Connect with database
dbConnect();

app.use('/', (req, res) => res.send('Nodejs and Express Backend Ecommerce '))
app.listen(PORT, () => console.log(`Server start at http://localhost:${PORT}`))