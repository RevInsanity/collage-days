const mongoose = require('mongoose');


const connect = async (uri) => {
    const connectionString = uri || process.env.MONGO_URI || 'mongodb+srv://ayawsir:Timogan00@database.vyu7sev.mongodb.net/?retryWrites=true&w=majority&appName=Database';
    try {
        // Fail faster on DNS/network issues with a short serverSelectionTimeoutMS
        const conn = await mongoose.connect(connectionString, { serverSelectionTimeoutMS: 5000 });
        console.log('mongoDB connected', conn.connection.host);
    } catch (err) {
        console.error('MongoDB connection error:', err && err.message ? err.message : err);
        // Re-throw so the app can decide whether to exit or retry
        throw err;
    }
};

module.exports = connect;
