import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    // TODO: Delete this console.log
    console.log("MongoDB Connected...");
    // TODO: Change this any to a proper type
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
