const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/db')
const userRoutes = require('./routes/user.routes')
const cors = require('cors')


const app = express();
const PORT = 5000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/user', userRoutes)


app.listen(PORT, () => {
    connect();
    console.log(`server is running on http://localhost:${PORT}`)
})


