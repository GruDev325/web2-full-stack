const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/test', { useNewUrlParser: true})
    .then(() => {
        console.log("Connected to mongodb")
    })
    .catch((e) => {
        console.log('Connection error: ' + e.message)
    })

const db = mongoose.connection;

module.exports = db;