const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const {createOrder, updateOrder, deleteOrder, getOneUserOrders, getAllOrders, getMonthlyIncome} = require("../controllers/order");

const router = require("express").Router();

// Define the "/order" routes

router.post("/", verifyToken, createOrder);// Create a new order
router.put("/:id", verifyTokenAndAdmin, updateOrder);// Update an order
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);// Delete an order
router.get("/find/:userId", verifyTokenAndAuthorization, getOneUserOrders);// Get orders for a specific user
router.get("/", verifyTokenAndAdmin, getAllOrders);// Get all orders (admin access)
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);// Get monthly income (admin access)

module.exports = router;
