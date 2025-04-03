import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Newsechom",
    });

    console.log("MongoDb Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
