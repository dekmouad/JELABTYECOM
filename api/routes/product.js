const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {createProduct, updateProduct, deleteProduct, getAllProducts,getProduct} = require("../controllers/products");

const router = require("express").Router();
// Define the "/product" routes

router.post("/", verifyTokenAndAdmin, createProduct);// Create a new product (admin access)
router.put("/:id", verifyTokenAndAdmin, updateProduct); // Update a product (admin access)
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);// Delete a product (admin access)
router.get("/find/:id", getProduct);// Get a specific product
router.get("/", getAllProducts);// Get all products



module.exports = router;
