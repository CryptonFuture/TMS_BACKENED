
import app from './app';
import connectToDatabase from './config/db.config';

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ||  'mongodb+srv://admin:tnU4Y0i2Ve4sUT33@cluster0.lyn9x.mongodb.net/';
// tnU4Y0i2Ve4sUT33
// Connect to MongoDB
connectToDatabase(MONGO_URI);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
