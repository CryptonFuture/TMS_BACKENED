
import mongoose from 'mongoose';

// MongoDB Connection Function
const connectToDatabase = async (mongoUri: string) => {
    try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
    } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on failure
    }
};

export default connectToDatabase;
                        
                    
