// import mongoose from 'mongoose';
const mongoose = require('mongoose');

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'nutrition-db',
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }
};
