import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log('dotenv loaded');
console.log('MONGO_URI from dotenv:', process.env.MONGO_URI);

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log('process.env:', process.env.MONGO_URI);

      throw new Error('MONGO_URI not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'nutrition-db',
    } as ConnectOptions);
    //   .then((res) => {
    //     console.log(
    //       'Connected to Distribution API Database - Initial Connection'
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(
    //       `Initial Distribution API Database connection error occured -`,
    //       err
    //     );
    //   });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
