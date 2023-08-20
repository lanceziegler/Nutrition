//@ts-ignore
export default function handler(req, res) {
    res.status(200).json({
      MONGO_URI: process.env.MONGO_URI,
      // Add other variables as needed
    });
  }