const mongoose = require('mongoose');

//define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels' //Replace 'mydatabase' with ur database 

//set up mongodb connection
mongoose.connect(mongoURL);

const db = mongoose.connection;

//Define event listener for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports = db;