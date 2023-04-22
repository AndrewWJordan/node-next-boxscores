import express from "express";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import apiRouter from "./routes/api";

const app = express();
const port = 3000;

async function start(): Promise<void> {
  const mongod = await MongoMemoryServer.create();

  try {
    const mongoUri = mongod.getUri();
    console.info(`MongoDB is running at: ${mongoUri}`);
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Failed to start MongoDB server - ${error}`);
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
}

app.use("/api", apiRouter);

start().catch((error) => {
  console.error(error);
});
