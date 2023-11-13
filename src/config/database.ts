import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI ?? "";
  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log(`MongoDB Connected`.cyan.underline);
  } catch (error: any) {
    console.error(`Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
