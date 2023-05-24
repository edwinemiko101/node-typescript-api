// For SQL (Sequelize)
import { Sequelize } from "sequelize";
import { ConnectOptions } from "mongoose";

export const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql", // or your preferred SQL dialect
});

// For NoSQL (Mongoose)
import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};
