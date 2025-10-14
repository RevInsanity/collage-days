
const express = require('express');

const connect = require('./config/db')

const app = express();
const PORT = 5000;




app.listen(PORT, () => {
    connect();
    console.log(`server is running on http://localhost:${PORT}`)
})


