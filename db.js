const mongoose = require('mongoose');

//define the mongodb connection url
//const mongoURL = process.env.MONGODB_URL_LOCAL //Replace 'mydatabase' with ur database , this url was for local
const mongoURL = process.env.MONGODB_URL; //this url is mongodb atlas wala url

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