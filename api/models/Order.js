const mongoose = require("mongoose");
// Define the schema for the "Order" model

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },// Field for the user ID, required
    products: [
      {
        productId: {
          type: String,// Field for the product ID
        },
        quantity: {
          type: Number,
          default: 1,// Field for the quantity, with a default value of 1
        },
      },
    ],
    amount: { type: Number, required: true },// Field for the order amount, required
    address: { type: Object, required: true }, // Field for the address object, required
    status: { type: String, default: "pending" }, // Field for the order status with a default value of "pending"
  },
  { timestamps: true }// Option to automatically add createdAt and updatedAt timestamps
);
// Create and export the "Order" model based on the schema
module.exports = mongoose.model("Order", OrderSchema);
