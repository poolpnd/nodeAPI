const express = require("express");
const router = express.Router();

const productsController = require("../controllers/product.controller");

router.get("/", productsController.getAllProducts); // GET /api/products
router.get("/:id", productsController.getProductById); // GET /api/products/:id
router.post("/", productsController.createProduct); // POST /api/products
router.put("/:id", productsController.updateProduct); // PUT /api/products/:id
router.delete("/:id", productsController.deleteProduct); // DELETE /api/products/:id

module.exports = router;
// In the router/products.js file, we have a set of routes that handle the CRUD operations for the product model. These routes are:
