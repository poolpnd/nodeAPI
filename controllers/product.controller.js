/**
 * @fileoverview This file contains the controller functions for handling CRUD operations on the product model.
 * @module controllers/product.controller
 */

const Product = require("../models/product.model");

/**
 * Creates a new product in the database.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created product.
 */
const createProduct = async (req, res) => {
  console.log("Creating a new product...");
  try {
    const product = await Product.create(req.body);
    console.log("Product created successfully.");
    res.status(200).json(product);
  } catch (err) {
    console.error("Error occurred while creating product: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Updates an existing product in the database.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The updated product.
 */
const updateProduct = async (req, res) => {
  console.log("Updating a product...");
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      console.log("Product not found.");
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product updated successfully.");
    res.status(200).json(product);
  } catch (err) {
    console.error("Error occurred while updating product: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Deletes a product from the database.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A success message.
 */
const deleteProduct = async (req, res) => {
  console.log("Deleting a product...");
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      console.log("Product not found.");
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product deleted successfully.");
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (err) {
    console.error("Error occurred while deleting product: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Retrieves all products from the database.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} An array of products.
 */
const getAllProducts = async (req, res) => {
  console.log("Retrieving all products...");
  try {
    const products = await Product.find({});
    console.log("Products retrieved successfully.");
    res.status(200).json(products);
  } catch (err) {
    console.error("Error occurred while retrieving products: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Retrieves a product by its ID from the database.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The retrieved product.
 */
const getProductById = async (req, res) => {
  console.log("Retrieving a product by ID...");
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log("Product not found.");
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("Product retrieved successfully.");
    res.status(200).json(product);
  } catch (err) {
    console.error("Error occurred while retrieving product: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
};
