const mongoose = require('mongoose');


const connect = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ayawsir:Timogan00@database.vyu7sev.mongodb.net/?retryWrites=true&w=majority&appName=Database', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('mongoDB connected', conn.connection.host);
    } catch (err) {
        console.error('MongoDB connection error:', err && err.message ? err.message : err);
        // Re-throw so the app can decide whether to exit or retry
        throw err;
    }
};

module.exports = connect;