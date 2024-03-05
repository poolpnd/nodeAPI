/**
 * @file This file contains the main server code for a simple CRUD app built with Node.js and Express.
 * It connects to a MongoDB database and sets up the necessary routes for handling admin and product data.
 */

const express = require("express");
const mongoose = require("mongoose");

const adminRouter = require("./router/admin");
const productsRouter = require("./router/products");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if it is a form submission, it will be parsed

/**
 * Connects to the MongoDB database using Mongoose.
 * @async
 * @function connectToDb
 * @returns {Promise<void>} A Promise that resolves when the connection is successful or rejects with an error.
 */
const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://coolcnd:8bDdlFmyVZ4RfpEE@backenddb.u8lifbm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
    );
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

connectToDb();

/**
 * Starts the server and listens on port 3000.
 * @function
 * @name app.listen
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The callback function to execute when the server starts listening.
 */
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/admin", adminRouter);
app.use("/api/products", productsRouter);
