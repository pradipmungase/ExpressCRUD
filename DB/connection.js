import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURI = 'mongodb://127.0.0.1:27017/curd';
    await mongoose.connect(dbURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
